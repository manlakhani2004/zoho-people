import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type DepartmentDocument = Department & Document;

export enum DepartmentStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

@Schema({ timestamps: true })
export class Department {
  @Prop({ required: true, unique: true, trim: true })
  departmentCode: string;

  @Prop({ required: true, trim: true })
  departmentName: string;

  @Prop({ default: null })
  description?: string;


  @Prop({ type: Types.ObjectId, ref: "Department", default: null })
  parentDepartmentId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "User", default: null })
  departmentHeadId?: Types.ObjectId;

  @Prop({
    type: String,
    enum: DepartmentStatus,
    default: DepartmentStatus.ACTIVE,
  })
  status: DepartmentStatus;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
