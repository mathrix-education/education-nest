import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findOne({ email });
    const success = await bcrypt.compare(
      password,
      user.password.replace('$2y$', '$2a$'),
    );

    if (!success) {
      throw new HttpException(
        'Invalid credentials',
        HttpStatus.UNAUTHORIZED,
      );
    } else {

      return {
        accessToken: this.jwtService.sign(
          {
            sub: user.id,
          },
          { algorithm: 'ES512' },
        ),
      };
    }
  }
}
