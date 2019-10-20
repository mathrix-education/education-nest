import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Purchase} from './models/purchases';
import {Transaction} from './models/transaction';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Purchase,
      Transaction,
    ]),
  ],
})
export class PaymentsModule {
}
