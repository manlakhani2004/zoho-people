import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-employeeDto";

export class UpdateUserDto extends PartialType(CreateUserDto) {}
