import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.schema';
import { VisitRequest, VisitRequestSchema } from './models/visitrequest.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema,
            },
            {
                name: VisitRequest.name,
                schema: VisitRequestSchema,
            },
        ]),
        JwtModule.register({
            global: true,
            secret: 'team07',
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [
        AuthModule,
        MongooseModule.forFeature([
            {
                name: VisitRequest.name,
                schema: VisitRequestSchema,
            },
        ]),
    ],
})
export class AuthModule {}
