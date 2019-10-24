import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Purchase} from './models/purchases';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Purchase,
    ]),
  ],
})
export class PaymentsModule {}
