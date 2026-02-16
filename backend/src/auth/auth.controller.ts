import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import {type Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authSerivece: AuthService, ) { }

    @Post('/signup')
    async signup(@Body() signupDto: SignupDto) {
      const response = await this.authSerivece.signUp(signupDto);

      return {
        success:true,
        message:"signup successfully",
        user:{
            name:response.name,
            email:response.email,
            password:response.password
        }
      }
    }

    @Post('/signin')
    async signin(@Body() signinDto:SigninDto,@Res({passthrough:true}) res:Response)
    {
        const response = await this.authSerivece.signin(signinDto);  

        res.cookie('token',response.token,{
            httpOnly:true,
            maxAge: 24 * 60 * 60 * 1000
        })
        return{
            success:true,
            message:"signin succesful",
            token:response.token,
            user:response.user
        } 
    }
}
