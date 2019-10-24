import {Module as NestModule} from '@nestjs/common';
import {UsersModule} from './modules/users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {GraphQLModule} from '@nestjs/graphql';
import {BlogModule} from './modules/blog/blog.module';
import {InteractionsModule} from './modules/interactions/interactions.module';
import {PaymentsModule} from './modules/payments/payments.module';
import {TrainingsModule} from './modules/trainings/trainings.module';
import {ScopeAuthChecker, TypeGraphQLBuildSchemaOptions} from './modules/users/scope-checker';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
      buildSchemaOptions: {
        authChecker: ScopeAuthChecker,
      } as TypeGraphQLBuildSchemaOptions,
    }),
    TypeOrmModule.forRoot(),
    BlogModule,
    InteractionsModule,
    PaymentsModule,
    TrainingsModule,
    UsersModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('**');
  }

}
