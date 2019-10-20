import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Purchase} from '../../payments/models/purchases';
import {Comment} from '../../interactions/models/comment';
import {Mark} from '../../interactions/models/mark';
import {Vote} from '../../interactions/models/vote';
import {GraphQLObjectType, GraphQLString} from 'graphql';
import {Post} from "../../blog/models/post";
import {Notion} from "../../content/models/notion";
import {Grade} from "../../content/models/grade";

@Entity({name: 'users'})
@ObjectType()
export class User {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @Column()
  @Field({nullable: true})
  username: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  password: string;

  @Column({type: 'json'})
  @Field(type => [String])
  scopes: string[];

  @Column({type: 'uuid'})
  @Field()
  token: string;

  @Column()
  @Field()
  points: number;

  @Column({default: 0})
  @Field()
  daily: number;

  @Column({default: 0})
  @Field()
  dailyAchievements: number;

  @Column({type: 'boolean'})
  @Field()
  premiumBypass: boolean;

  @Column({type: 'datetime'})
  @Field()
  premiumBypassExpiresAt: Date;

  @Column({type: 'bigint'})
  @Field()
  gradeId: number;

  @Column()
  @Field()
  stripeId: string;

  @Column()
  @Field()
  braintreeId: string;

  @Column({type: 'json'})
  @Field(type => GraphQLString)
  metadata: any;

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Grade, grade => grade.users)
  @Field(() => Grade)
  grade: Grade;

  @OneToMany(type => Comment, comment => comment.user)
  @Field(type => [Comment])
  comments: Comment[];

  @OneToMany(type => Mark, mark => mark.user)
  @Field(type => [Mark])
  marks: Mark[];

  @OneToMany(type => Post, post => post.user)
  @Field(type => [Post])
  posts: Post[];

  @OneToMany(type => Purchase, purchase => purchase.user)
  @Field(type => [Purchase])
  purchases: Purchase[];

  @OneToMany(type => Vote, vote => vote.user)
  @Field(type => [Vote])
  votes: Vote[];
}
