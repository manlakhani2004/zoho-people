import {  BadRequestException, Injectable } from '@nestjs/common';
import { SignupDto } from 'src/auth/dto/signup.dto';
import { User } from './schemas/user.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from "bcryptjs";
import { CreateUserDto } from './dto/create-employeeDto';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    //for authentication
    async findUser(email: string) {
        return await this.userModel.findOne({ email: email });
    }

    async findUserByPhone(phone: string) {
        return await this.userModel.findOne({ phone: phone });
    }
    async findUserbyId(id: string) {
        return await this.userModel.findOne({ _id: id });
    }
    async updateUserPassword(id: string, password: string) {
        return await this.userModel.findByIdAndUpdate(
            id,
            { password: password },
            { new: true }
        );
    }
    async createUser(singupData: SignupDto) {
        return await this.userModel.create({
            fullName: singupData.name,
            email: singupData.email,
            password: singupData.password,
            phone:singupData.phone,
            role: "admin"
        })
    }


  async createEmployee(dto: CreateUserDto) {

    const exists = await this.userModel.findOne({ email: dto.email });
    if (exists) throw new BadRequestException("Email already exists");

    if (dto.departmentId && !Types.ObjectId.isValid(dto.departmentId)) {
      throw new BadRequestException("Invalid departmentId");
    }

    if (dto.managerId && !Types.ObjectId.isValid(dto.managerId)) {
      throw new BadRequestException("Invalid managerId");
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

   
    const payload: any = {
      ...dto,
      password: hashedPassword,
      role: dto.role || "employee",
     
    };


    const employee = await this.userModel.create(payload);

  
    const userObj = employee.toObject();
    // delete userObj.password;

    return userObj;
  }

   async getAllManagers() {
    return this.userModel
      .find({
        role:"manager",
      })
      .select("_id name email phone role")
      .sort({ createdAt: -1 });
  }

  async getAllEmployees() {
    return this.userModel
      .find({
        role:{$ne:"admin"}
      })
      .select("-password")
      .populate("managerId")
      .populate("departmentId") 
      .sort({ createdAt: -1 });
  }
}
