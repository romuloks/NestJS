import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/Hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/olaBSM')
  getolaBSM(): string {
    return this.appService.getolaBSM();
  }
  @Get('/nivel')
  getnivel(): string {
    return this.appService.getnivel();
  }



}
