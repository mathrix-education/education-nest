import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user';
import { UsersResolver } from './resolvers/users.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { JwtResolver } from './resolvers/jwt.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '7776000s' },
    }),
  ],
  providers: [AuthService, UsersService, UsersResolver, JwtResolver],
  exports: [AuthService, UsersService, JwtModule],
})
export class UsersModule {
}
