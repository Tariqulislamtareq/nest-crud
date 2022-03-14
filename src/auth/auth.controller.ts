import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { SigninDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('user')
  userSignup(@Body() dto: AuthDto) {
    // console.log({ dto });
    return this.authService.userSignup(dto);
  }

  @Post('author')
  authorSignup(@Body() dto: AuthDto) {
    // console.log({ dto });
    return this.authService.authorSignup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: SigninDto) {
    return this.authService.signin(dto);
  }
}
