import {Module as NestModule} from '@nestjs/common';
import {UsersModule} from './modules/users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './modules/users/models/user';
import {GraphQLModule} from '@nestjs/graphql';
import {BlogModule} from './modules/blog/blog.module';
import {Category} from './modules/blog/models/category';
import {Post} from './modules/blog/models/post';
import {Activity} from './modules/content/models/activity';
import {Chapter} from './modules/content/models/chapter';
import {Country} from './modules/content/models/country';
import {Discipline} from './modules/content/models/discipline';
import {Grade} from './modules/content/models/grade';
import {Module} from './modules/content/models/module';
import {Notion} from './modules/content/models/notion';

@NestModule({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'salome3004',
      database: 'mathrix_education_nest',
      migrationsTableName: 'migrations',
      migrations: [
        'src/migrations/*.ts',
      ],
      entities: [
        // Blog
        Category,
        Post,
        // Content
        Activity,
        Chapter,
        Country,
        Discipline,
        Grade,
        Module,
        Notion,
        // Users
        User,
      ],
      synchronize: true,
    }),
    BlogModule,
    UsersModule,
  ],
})
export class AppModule {
}
