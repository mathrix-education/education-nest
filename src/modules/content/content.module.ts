import {Module as NestModule} from '@nestjs/common' ;
import {TypeOrmModule} from '@nestjs/typeorm';
import {Activity} from './models/activity';
import {Chapter} from './models/chapter';
import {Discipline} from './models/discipline';
import {Grade} from './models/grade';
import {Module} from './models/module';
import {Notion} from './models/notion';

@NestModule({
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
