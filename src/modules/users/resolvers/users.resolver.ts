import {Query, Resolver} from '@nestjs/graphql';
import {User} from '../models/user';
import {Arg} from 'type-graphql';
import {CurrentUser} from '../decorators/current-user.decorator';
import {UsersService} from '../services/users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {
  }

  @Query(() => User)
  async me(@CurrentUser() user: User) {
    return user;
  }

  @Query(() => [User])
  async getUsers() {
    return this.usersService.list();
  }

  @Query(() => User)
  async getUser(@Arg('id') id: number) {
    return this.usersService.read(id);
  }
}
