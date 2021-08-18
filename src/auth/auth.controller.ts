import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import {
  AuthCredentialsDto,
  AuthCredentialsSignUpDto,
} from './dto/auth-credentials.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @ApiResponse({
    status: 201,
    description: 'User Created',
  })
  signup(@Body() authCredentialsDto: AuthCredentialsSignUpDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @ApiResponse({
    status: 201,
    description: 'User logged in',
  })
  @Post('/signin')
  signin(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
