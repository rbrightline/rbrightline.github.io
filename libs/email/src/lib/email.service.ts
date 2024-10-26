import {} from 'nodemailer';

export class EmailService {
  info(template: string, message: string): void {}
  noreply(template: string, message: string): void {}
  security(template: string, message: string): void {}
  notify(template: string, message: string): void {}
  job(template: string, message: string): void {}
}
