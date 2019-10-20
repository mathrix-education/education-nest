import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from '../../users/services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {
  }

  async use(req: Request, res: Response, next: () => void) {
    const authorizationHeader = req.header('Authorization');
    if (authorizationHeader) {
      const bearerToken = authorizationHeader.replace('Bearer ', '');
      let payload;

      try {
        payload = this.jwtService.verify(bearerToken);
      } catch (error) {
        throw new HttpException('Invalid JWT', HttpStatus.UNAUTHORIZED);
      }

      req.user = await this.usersService.read(payload.sub);
    }

    next();
  }
}
