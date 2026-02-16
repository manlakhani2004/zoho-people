import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { DepartmentStatus } from "../schemas/department.schema";

export class CreateDepartmentDto {
  @IsNotEmpty()
  @IsString()
  departmentCode: string;

  @IsNotEmpty()
  @IsString()
  departmentName: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  parentDepartmentId?: string;

  @IsOptional()
  departmentHeadId?: string;

  @IsOptional()
  @IsEnum(DepartmentStatus)
  status?: DepartmentStatus;
}
