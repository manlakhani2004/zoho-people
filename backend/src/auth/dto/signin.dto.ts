import { IsEmail, IsNotEmpty, Validate } from "class-validator";
import { IsEmailOrPhone } from "src/validators/email-phone.validator";


export class SigninDto{
    @IsNotEmpty()
    @Validate(IsEmailOrPhone)
    email:string

    @IsNotEmpty()
    password:string
}