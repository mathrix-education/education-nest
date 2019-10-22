import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Jwt } from '../models/jwt';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';

@Resolver(() => Jwt)
export class JwtResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => Jwt)
  async loginUser(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.authService.login(email, password);
  }
}
