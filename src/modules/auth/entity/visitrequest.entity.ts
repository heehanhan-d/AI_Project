import { State } from 'src/constants/dog/dog.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VisitRequest {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // user_id: User.id

    // @Column()
    // dog_id: Dog.id

    @Column()
    whenDay?: Date;

    @Column()
    whenTime?: string;

    @Column()
    state: State;

    @Column()
    isActive: boolean;
}
