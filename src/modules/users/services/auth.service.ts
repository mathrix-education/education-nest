import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from '../models/user';
import {Repository} from 'typeorm';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {
  }

  async validateUser(email: string, plain: string) {
    const user = await this.userRepository.findOne({email});
    const success = await bcrypt.compare(plain, user.password);

    if (success) {
      const {password, ...result} = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = {sub: user.userId};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
