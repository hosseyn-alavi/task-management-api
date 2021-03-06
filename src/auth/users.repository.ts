import {
  ConflictException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsSignUpDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private logger = new Logger('UserRepository');
  async createUser(
    authCredentialsDto: AuthCredentialsSignUpDto,
  ): Promise<void> {
    const { username, password, role } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      username,
      password: hashedPassword,
      creationDate: new Date().toISOString(),
      role,
      isActive: true,
    });
    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        //duplicate error in postgres
        throw new ConflictException('Username already exist');
      } else {
        this.logger.error(error);
        throw new InternalServerErrorException();
      }
    }
  }
}
