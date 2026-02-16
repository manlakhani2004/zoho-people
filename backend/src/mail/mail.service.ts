import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get("MAIL_HOST"),
      port: Number(this.configService.get("MAIL_PORT")),
      secure: false, // true only for 465
      auth: {
        user: this.configService.get("MAIL_USER"),
        pass: this.configService.get("MAIL_PASS"),
      },
    });
  }

  async sendMail(to: string, subject: string, html: string) {
    return await this.transporter.sendMail({
      from: this.configService.get("MAIL_USER"),
      to,
      subject,
      html,
    });
  }
}
