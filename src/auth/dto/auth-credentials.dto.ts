import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Role } from '../user.entity';

export class AuthCredentialsDto {
  @ApiProperty({ example: 'hosseyn0' })
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  username: string;

  @ApiProperty({ example: 'passworD1' })
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is week',
  })
  password: string;
}

export class AuthCredentialsSignUpDto extends AuthCredentialsDto {
  @ApiProperty({
    description: 'It should be enum: "USER" , "ADMIN"',
  })
  @IsEnum(Role)
  role: Role;
}
