import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { State } from 'src/constants/dog/dog.enum';

export type VisitRequestDocument = HydratedDocument<VisitRequest>;

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class VisitRequest {
    @Prop()
    dog_id: string;

    @Prop()
    name: string;

    @Prop()
    phone: string;

    @Prop()
    when_day?: Date;

    @Prop()
    when_time?: string;

    @Prop({ default: State.SUBMITTED })
    state: State;

    @Prop()
    isActive: boolean;
}
export const VisitRequestSchema = SchemaFactory.createForClass(VisitRequest);
