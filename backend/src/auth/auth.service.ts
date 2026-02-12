import {  Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { UserService } from 'src/user/user.service';
import bcrypt from 'bcrypt';
import { SigninDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async signUp(singupData: SignupDto) {
        
        const user = await this.userService.findUser(singupData.email)
        if (user) {
            throw new UnauthorizedException('User already exists');
        }
        const saltRound = 10
        const hashpassword = await bcrypt.hash(singupData.password, saltRound)
    
        return await this.userService.createUser({ ...singupData, password: hashpassword });
    }

    async signin(signinData: SigninDto) {
        const identifier = signinData.email;

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmail = emailRegex.test(identifier);
        let user;
        if(isEmail)
        {
            user = await this.userService.findUser(signinData.email);
        }else{
            user = await this.userService.findUserByPhone(signinData.email);
        }
        
        if (!user) {
            throw new UnauthorizedException("User not exist")
        }
        // console.log(user);

        const isPassword = await bcrypt.compare(signinData.password, user.password)
        
        if (!isPassword) {
            throw new UnauthorizedException("Password is incorrect");
        }

        const payload = {
            id: user._id,
            email: user.email,
            role: user.role
        }
        
        const token = await this.jwtService.signAsync(payload,{secret:"manpatel"})
        return{
            token,
            user
        }
    }

}
