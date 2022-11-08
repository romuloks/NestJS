import {Body, Controller, HttpStatus, HttpCode, Post, UseGuards } from "@nestjs/common";
import { UsuarioLogin } from "../entities/usuariologin.entity";
import { ApiTags } from "@nestjs/swagger/dist";
import { LocalAuthGaurd } from "../guard/local-auth.guard";
import { AuthService } from "../service/auth.service";
@ApiTags('Usuario')
@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGaurd)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login(@Body() user: UsuarioLogin): Promise<any> {
        return this.authService.login(user)
    }


}