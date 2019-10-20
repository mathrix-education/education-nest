import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from '../models/user';
import {Repository} from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly repository: Repository<User>) {
  }

  list() {
    return this.repository.find();
  }

  read(userId: number) {
    return this.repository.findOne(userId);
  }

  update(userId: number, data: Partial<User>) {
    return this.repository.update(userId, data);
  }

  delete(userId: number) {
    return this.repository.delete(userId);
  }
}
