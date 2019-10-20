import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user';
import { Repository } from 'typeorm';
import uuid from 'uuidv4';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  list() {
    return this.repository.find();
  }

  create(data: Partial<User>) {
    data.scopes = [];
    data.metadata = {};
    data.token = uuid();
    data.password = bcrypt.hashSync(data.password, 11);
    return this.repository.save(data);
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
