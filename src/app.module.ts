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
import {Mark} from './modules/interactions/models/mark';
import {Report} from './modules/interactions/models/report';
import {Vote} from './modules/interactions/models/vote';
import {Comment} from './modules/interactions/models/comment';
import {Purchase} from './modules/payments/models/purchases';
import {Transaction} from './modules/payments/models/transaction';
import {InteractionsModule} from './modules/interactions/interactions.module';
import {PaymentsModule} from './modules/payments/payments.module';
import {TrainingsModule} from './modules/trainings/trainings.module';
import {Product} from './modules/trainings/models/product';
import {ScopeAuthChecker, TypeGraphQLBuildSchemaOptions} from './modules/users/scope-checker';

@NestModule({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({req}) => ({req}),
      buildSchemaOptions: {authChecker: ScopeAuthChecker} as TypeGraphQLBuildSchemaOptions,
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
      cli: {
        migrationsDir: 'src/migrations',
      },
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
        // Interactions
        Comment,
        Mark,
        Report,
        Vote,
        // Payments
        Purchase,
        Transaction,
        // Trainings
        Product,
        // Users
        User,
      ],
      synchronize: true,
    }),
    BlogModule,
    InteractionsModule,
    PaymentsModule,
    TrainingsModule,
    UsersModule,
  ],
})
export class AppModule {
}
