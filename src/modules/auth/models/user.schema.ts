import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Platform } from 'src/constants/auth/user.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class User {
    @Prop({ unique: true })
    email: string;

    @Prop()
    username: string;

    @Prop()
    phone: String;

    @Prop()
    password?: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ default: false })
    isAdmin: boolean;

    @Prop({ default: Platform.YOUIF })
    platform: Platform;
}

export const UserSchema = SchemaFactory.createForClass(User);
