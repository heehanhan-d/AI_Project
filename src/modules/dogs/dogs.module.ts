import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { Dog, DogSchema } from './models/dog.schema';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from '../auth/auth.module';

@Module({
    // imports -> 구현한 모듈 등록
    imports: [
        AuthModule,
        HttpModule,
        MongooseModule.forFeature([
            {
                name: Dog.name,
                schema: DogSchema,
            },
        ]),
    ],
    // 현재 모듈에서 구현한 컨트롤러 등록
    controllers: [DogsController],

    // 현재 모듈에서 구현한 서비스 등록
    providers: [DogsService],

    // 현재 모듈의 구성품을 다른 모듈에서 사용하고자 할때, 구성품 명시
    exports: [DogsModule],
})
// 모듈을 클래스화해서 익스포트
export class DogsModule {}
