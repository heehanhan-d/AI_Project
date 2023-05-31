import {
    Controller,
    Get,
    Post,
    Body,
    Res,
    Param,
    Query,
    Patch,
    UseInterceptors,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { SearchDogListDto } from './dto/search-doglist.dto';
import { PagenationDogDto } from './dto/pagenation-dog.dto';
import { CreateRequestDto } from './dto/create-request.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Dog } from './models/dog.schema';

// 컨트롤러 데코레이터 : 라우팅 경로 매핑
@Controller('underdogs')
export class DogsController {
    constructor(private readonly DogsService: DogsService) {}

    // 유기견 전체 목록 조회
    // (CacheInterceptor) 자주 요청될 최초 유기견 데이터를 자동으로 캐싱하고, 10분간 캐싱처리
    @Get('/')
    @UseInterceptors(CacheInterceptor)
    async getDogList(@Query() pagenationDogDto: PagenationDogDto) {
        try {
            const dogList = await this.DogsService.findDogsList(
                pagenationDogDto
            );
            const cnt = dogList.length;
            return {
                message: `(전체 목록) 유기견 ${cnt}개 조회 성공`,
                data: dogList,
            };
        } catch (err) {
            return { message: err };
        }
    }

    // 사용자 이미지 검색 유기견 목록 조회
    @Get('/search')
    @UseInterceptors(CacheInterceptor)
    async searchDogList(@Query() searchDogListDto: SearchDogListDto) {
        try {
            const searchedDogList: Dog[] = await this.DogsService.searchDogList(
                searchDogListDto
            );
            return {
                message: `(사용자 검색) 유기견 조회 성공`,
                data: searchedDogList,
            };
        } catch (err) {
            return { message: err };
        }
    }

    // 특정 유기견 id 검색 및 조회
    @Get('/:id')
    @UseInterceptors(CacheInterceptor)
    async getDog(@Param('id') dog_id: String) {
        try {
            const dog = await this.DogsService.findDog(dog_id);
            return {
                message: '특정 유기견 정보 조회 성공',
                data: dog,
            };
        } catch (err) {
            return { message: err };
        }
    }

    // 방문 예약 신청 데이터 생성
    @Post('visitrequest')
    createRequest(@Body() createRequest: CreateRequestDto, @Res() res) {
        this.DogsService.createRequest(createRequest)
            .then((createdRequest) => {
                res.json({
                    message: '방문 신청 데이터 입력 성공',
                    data: createdRequest,
                });
            })
            .catch((err) => {
                res.json({ message: err });
            });
    }

    // 유기견 데이터 입력 (Flask -> Nest)
    @Post('upload')
    uploadData(@Body() createDogData: CreateDogDto[], @Res() res) {
        this.DogsService.createMany(createDogData)
            .then((createdDog) => {
                res.json({
                    message: '유기견 데이터 입력 성공',
                    data: createdDog,
                });
            })
            .catch((err) => {
                res.json({ message: err });
            });
    }

    // 믹스견 품종 데이터 추출 및 데이터 업데이트 (Nest -> Flask -> MongDB)
    @Patch('/breeds/admin')
    generateBreeds(@Res() res) {
        this.DogsService.patchMany()
            .then((dogsBreeds) => {
                res.json({
                    message: '품종 데이터 생성 성공?',
                    data: dogsBreeds,
                });
            })
            .catch((err) => {
                res.json({ message: err });
            });
    }
}
