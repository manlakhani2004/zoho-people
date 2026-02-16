import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [    ConfigModule.forRoot({
      isGlobal: true, 
    }),MongooseModule.forRoot(process.env.MONGO_URI!),AuthModule,UserModule, MailModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
