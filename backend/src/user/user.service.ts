import {  Injectable } from '@nestjs/common';
import { SignupDto } from 'src/auth/dto/signup.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


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
            name: singupData.name,
            email: singupData.email,
            password: singupData.password,
            phone:singupData.phone,
            role: "admin"
        })
    }


}
