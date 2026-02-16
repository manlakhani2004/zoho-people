import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-employeeDto';
import { CreateEmployeeSchema } from './validation/user.validation';
import { JoiValidationPipe } from 'src/common/pipes/joi-validation.pipe';


@Controller('employee')
export class UserController {
    constructor(private userService: UserService) { }


    @Post("create-employee")
    @UsePipes(new JoiValidationPipe(CreateEmployeeSchema))
    createEmployee(@Body() dto: CreateUserDto) {
        return this.userService.createEmployee(dto);
    }
    @Get("managers")
    getAllManagers() {
        return this.userService.getAllManagers();
    }

    @Get('employees')
    getAllEmployee() {
        return this.userService.getAllEmployees();
    }
    
}
