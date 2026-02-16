import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { UpdateDepartmentDto } from "./dto/update-department.dto";
import { Department, DepartmentDocument } from "./schemas/department.schema";

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name)
    private readonly departmentModel: Model<DepartmentDocument>,
  ) {}

  async create(dto: CreateDepartmentDto) {
    const exists = await this.departmentModel.findOne({
      departmentCode: dto.departmentCode,
    });

    if (exists) {
      throw new BadRequestException("Department code already exists");
    }

    return this.departmentModel.create(dto);
  }

  async findAll() {
    return this.departmentModel
      .find()
      .sort({ createdAt: -1 })
      .populate("parentDepartmentId", "departmentName departmentCode")
      .populate("departmentHeadId", "fullName email");
  }

  async findOne(id: string) {
    const dep = await this.departmentModel.findById(id);

    if (!dep) throw new NotFoundException("Department not found");

    return dep;
  }

  async update(id: string, dto: UpdateDepartmentDto) {
    const updated = await this.departmentModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    if (!updated) throw new NotFoundException("Department not found");

    return updated;
  }

  async remove(id: string) {
    const deleted = await this.departmentModel.findByIdAndDelete(id);

    if (!deleted) throw new NotFoundException("Department not found");

    return { message: "Department deleted successfully" };
  }
}
