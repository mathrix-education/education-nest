import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './models/user';
import {UsersResolver} from './resolvers/users.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UsersResolver],
})
export class UsersModule {

}
