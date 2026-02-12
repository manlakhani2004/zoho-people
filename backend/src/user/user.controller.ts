import { Controller} from '@nestjs/common';
import { UserService } from './user.service';


@Controller('employee')
export class UserController {
    constructor(private userService:UserService){}


}
