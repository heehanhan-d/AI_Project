import { IsEnum, IsString } from 'class-validator';
import { State } from 'src/constants/dog/dog.enum';

export class UpdateVisitRequestDto {
    @IsEnum(State)
    state: State;
}
