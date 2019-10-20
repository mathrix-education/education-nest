import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './models/user';
import {UsersResolver} from './resolvers/users.resolver';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '7776000s'},
    }),
  ],
  providers: [UsersResolver],
})
export class UsersModule {

}
