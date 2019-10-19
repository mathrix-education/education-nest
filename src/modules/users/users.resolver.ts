import {Query, Resolver} from '@nestjs/graphql';
import {User} from './models/user';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Arg, Int} from 'type-graphql';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
  }

  @Query(() => [User])
  async getUsers() {
    return this.userRepository.find();
  }

  @Query(() => User)
  async getUser(@Arg('id') id: number) {
    return this.userRepository.findOne(id);
  }
}
