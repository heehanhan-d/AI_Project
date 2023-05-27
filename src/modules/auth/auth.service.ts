import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/user.schema';
import { Model } from 'mongoose';
import { VisitRequest } from './models/visitRequest.schema';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { PagenationVisitRequestDto } from './dto/pagenation-visitrequest.dto';
import { UpdateVisitRequestDto } from './dto/update-visitrequest.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ObjectId } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(VisitRequest.name)
        private visitRequestModel: Model<VisitRequest>,
        private jwtService: JwtService
    ) {}

    // 회원 가입
    async createUser(signUpDto: SignUpDto): Promise<User> {
        try {
            // 중복 방지 이메일 확인
            const existingUser = await this.userModel.findOne({
                email: signUpDto.email,
            });
            if (existingUser) {
                throw new Error('이미 존재하는 이메일 입니다.');
            }

            // 비밀번호 암호화 후 계정 생성
            signUpDto.password = await bcrypt.hash(signUpDto.password, 10);
            return await this.userModel.create(signUpDto);
        } catch (err) {
            throw err;
        }
    }

    // 회원 탈퇴
    async deleteUser(requestInfo) {
        try {
            const token = requestInfo.headers.authorization?.split(' ')[1];
            if (!token) {
                throw new Error('헤더에 토큰이 없습니다.');
            }
            const { _id } = await this.jwtService.verifyAsync(token);
            const existingUser = await this.userModel.findOne({ _id });
            if (!existingUser.isActive) {
                throw new Error('이미 탈퇴된 회원입니다.');
            }
            return await this.userModel.findByIdAndUpdate(
                { _id },
                { isActive: false }
            );
        } catch (err) {
            throw err;
        }
    }

    // 로그인
    async findUserAndGenerateToken(signInDto: SignInDto) {
        try {
            const { email, password } = signInDto;
            let foundUser: any = await this.userModel.findOne({ email });
            if (!foundUser) {
                throw new Error('존재하지 않는 회원입니다.');
            }

            const isPassword = await bcrypt.compare(
                password,
                foundUser.password
            );
            if (!isPassword) {
                throw new Error('비밀번호가 일치하지 않습니다.');
            }

            const payload = { _id: foundUser._id.toString() };
            const token: string = await this.jwtService.signAsync(payload, {
                expiresIn: 60 * 60,
            });
            foundUser.token = token;
            return foundUser;
        } catch (err) {
            throw err;
        }
    }

    // 관리자 방문 신청 목록 조회
    async findVisitRequestList(
        requestInfo,
        pagenationDto: PagenationVisitRequestDto
    ): Promise<VisitRequest[]> {
        try {
            const token = requestInfo.headers.authorization?.split(' ')[1];
            if (!token) {
                throw new Error('헤더에 토큰이 없습니다.');
            } else {
                const { _id } = await this.jwtService.verifyAsync(token);
                const user = await this.userModel.findById({ _id });
                if (!user.isAdmin) {
                    throw new Error('사용자에게 관리자 권한이 없슴');
                }
            }
            const { skip, limit } = pagenationDto;

            return await this.visitRequestModel.find().skip(skip).limit(limit);
        } catch (err) {
            throw err;
        }
    }

    // 관리자 방문 신청 상태 변경
    async findAndUpdateVisitRequest(
        requestInfo,
        visitRequestInfo,
        updateVisitRequestDto: UpdateVisitRequestDto
    ) {
        try {
            const token = requestInfo.headers.authorization?.split(' ')[1];
            if (!token) {
                throw new Error('헤더에 토큰이 없습니다.');
            }

            const { _id } = await this.jwtService.verifyAsync(token);
            const user = await this.userModel.findById({ _id });
            if (!user) {
                throw new Error('토큰과 일치하는 사용자 없음');
            } else if (!user.isAdmin) {
                throw new Error('사용자에게 관리자 권한이 없음');
            }

            const { state } = updateVisitRequestDto;
            const updatedUser = await this.visitRequestModel.findByIdAndUpdate(
                { _id: visitRequestInfo },
                { state }
            );
            return await this.visitRequestModel.findById(updatedUser._id);
        } catch (err) {
            throw err;
        }
    }
}
