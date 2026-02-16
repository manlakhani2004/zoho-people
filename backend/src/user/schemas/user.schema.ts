import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

enum UserRole {
    ADMIN = 'admin',
    MANAGER = 'manager',
    EMPLOYEE = 'employee',
}

@Schema({ timestamps: true })
export class User extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.ADMIN
    })
    role: UserRole

    @Prop({
        required: true,
        trim: true,
    })
    phone: string;
    
    @Prop()
    department?: string;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    managerId?: Types.ObjectId;

}

export const UserSchema = SchemaFactory.createForClass(User);