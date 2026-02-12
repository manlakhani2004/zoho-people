import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Matches } from "class-validator";

export class  SignupDto{

    @IsNotEmpty()
    @IsString()
    name:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[6-9]\d{9}$/, { message: "Phone must be valid" })
    phone:string;

}