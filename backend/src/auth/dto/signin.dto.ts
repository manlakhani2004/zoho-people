import { IsEmail, IsNotEmpty, Validate } from "class-validator";
import { IsEmailOrPhone } from "src/common/validators/email-phone.validator";


export class SigninDto{
    @IsNotEmpty()
    @Validate(IsEmailOrPhone)
    email:string

    @IsNotEmpty()
    password:string
}