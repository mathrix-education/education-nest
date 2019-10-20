import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Jwt {
  @Field()
  accessToken: string;
}
