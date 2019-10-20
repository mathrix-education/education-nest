import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Comment} from './models/comment';
import {Mark} from './models/mark';
import {Report} from './models/report';
import {Vote} from './models/vote';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Comment,
      Mark,
      Report,
      Vote,
    ]),
  ],
})
export class InteractionsModule {
}
