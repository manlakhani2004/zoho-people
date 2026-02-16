import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { IsEmailOrPhone } from 'src/validators/email-phone.validator';

@Module({
  imports:[ JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),UserModule],
  providers: [AuthService,IsEmailOrPhone],
  controllers: [AuthController]
})
export class AuthModule {}
