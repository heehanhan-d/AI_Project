import { IsString } from 'class-validator';

export class SignUpDto {
    @IsString()
    username: string;

    @IsString()
    phone: string;

    @IsString()
    email: string;

    @IsString()
    password?: string;
}
