import {Module} from '@nestjs/common';
import {UsersModule} from './modules/users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './modules/users/models/user';
import {GraphQLModule} from '@nestjs/graphql';

@Module({
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
      database: 'local_mathrix_education',
      migrationsTableName: 'migrations',
      migrations: [
        'src/migrations/*.ts',
      ],
      entities: [
        User,
      ],
      synchronize: false,
    }),
    UsersModule,
  ],
})
export class AppModule {
}
