import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Activity} from './models/activity';
import {Chapter} from './models/chapter';
import {Discipline} from './models/discipline';
import {Grade} from './models/grade';
import {Notion} from './models/notion';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Activity,
      Chapter,
      Discipline,
      Grade,
      Module,
      Notion,
    ]),
  ],
})
export class ContentModule {
}
