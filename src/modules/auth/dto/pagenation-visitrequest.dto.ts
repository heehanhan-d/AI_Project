import { IsNumber } from 'class-validator';

export class PagenationVisitRequestDto {
    @IsNumber()
    skip: number;

    @IsNumber()
    limit: number;
}
