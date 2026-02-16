import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes } from "@nestjs/common";
import { DepartmentService } from "./department.service";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { UpdateDepartmentDto } from "./dto/update-department.dto";
import { JoiValidationPipe } from "src/common/pipes/joi-validation.pipe";
import { CreateDepartmentSchema, UpdateDepartmentSchema } from "./validation/department.validation";
import { MongoIdPipe } from "src/common/pipes/mongo-id.pipe";

@Controller("departments")
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) { }

    @Post()
    @UsePipes(new JoiValidationPipe(CreateDepartmentSchema))
    create(@Body() dto: CreateDepartmentDto) {
        return this.departmentService.create(dto);
    }

    @Get()
    findAll() {
        return this.departmentService.findAll();
    }

    @Get(":id")
    findOne(@Param("id", MongoIdPipe) id: string) {
        return this.departmentService.findOne(id);
    }

    @Patch(":id")
    @UsePipes(new JoiValidationPipe(UpdateDepartmentSchema))
    update(@Param("id") id: string, @Body() dto: UpdateDepartmentDto) {
        return this.departmentService.update(id, dto);
    }

    @Delete(":id")
    remove(@Param("id", MongoIdPipe) id: string) {
        return this.departmentService.remove(id);

    }
}
