import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Req,
    Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { User } from './models/user.schema';
import { SignInDto } from './dto/sign-in.dto';
import { PagenationVisitRequestDto } from './dto/pagenation-visitrequest.dto';
import { UpdateVisitRequestDto } from './dto/update-visitrequest.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    // 회원가입
    @Post('/users/sign-up')
    async signUp(@Res() res, @Body() signUpDto: SignUpDto) {
        this.authService
            .createUser(signUpDto)
            .then((newUser: User) => {
                res.json({
                    message: '사용자 회원가입 완료',
                    data: newUser.email,
                });
            })
            .catch((err) => {
                res.json({ message: err.message });
            });
    }

    // 회원탈퇴
    @Delete('/users/sign-off')
    async signOff(@Res() res, @Req() req) {
        this.authService
            .deleteUser(req)
            .then(() => {
                res.json({ message: '회원 탈퇴 완료' });
            })
            .catch((err) => {
                res.json({ message: err.message });
            });
    }

    // 로그인
    @Post('/users/sign-in')
    async signIn(@Res() res, @Body() signInDto: SignInDto) {
        await this.authService
            .findUserAndGenerateToken(signInDto)
            .then((user) => {
                res.json({
                    message: '사용자 로그인 완료, 토큰 반환',
                    data: user.token,
                    isAdmin: user.isAdmin,
                });
            })
            .catch((err) => {
                res.json({ message: err.message });
            });
    }

    // 방문 신청 목록 조회 (사용자, 관리자)
    @Get('/:who/visitrequest')
    async getVisitRequestList(
        @Req() req,
        @Res() res,
        @Param('who') authInfo,
        @Query() pagenationVisitRequestDto: PagenationVisitRequestDto
    ) {
        await this.authService
            .findVisitRequestList(authInfo, req, pagenationVisitRequestDto)
            .then((list) => {
                const cnt = list.length;
                res.json({
                    message: `${authInfo} 방문 신청 목록 ${cnt}개 조회 성공`,
                    data: list,
                });
            })
            .catch((err) => {
                res.json({
                    message: err.message,
                });
            });
    }

    // 관리자 방문신청 상태 변경
    @Patch('/admin/visitrequest/:id')
    async patchVisitRequest(
        @Res() res,
        @Req() req,
        @Param('id') visitRequestId,
        @Body() updateVisitRequestDto: UpdateVisitRequestDto
    ) {
        await this.authService
            .findAndUpdateVisitRequest(
                req,
                visitRequestId,
                updateVisitRequestDto
            )
            .then((user) => {
                res.json({
                    message: `관리자용 방문 신청건 상태 변경 성공`,
                    data: user.state,
                });
            })
            .catch((err) => {
                res.json({ message: err.message });
            });
    }
}
