import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Authorized, Field, ID, ObjectType } from 'type-graphql';
import { Purchase } from '../../payments/models/purchases';
import { Comment } from '../../interactions/models/comment';
import { Mark } from '../../interactions/models/mark';
import { Vote } from '../../interactions/models/vote';
import { GraphQLJSONObject } from 'graphql-type-json';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(type => ID)
  id: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  username: string;

  @Column()
  @Authorized('users:read')
  @Field()
  email: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  lastName: string;

  @Column()
  @Field()
  password: string;

  @Column({ type: 'json' })
  @Field(() => [String])
  scopes: string[];

  @Column({ type: 'uuid' })
  @Field()
  token: string;

  @Column({ default: true })
  @Field()
  points: number;

  @Column({ default: 0 })
  @Field()
  daily: number;

  @Column({ default: 0 })
  @Field()
  dailyAchievements: number;

  @Column({ type: 'boolean', default: false })
  @Field()
  premiumBypass: boolean;

  @Column({ type: 'datetime', nullable: true, default: null })
  @Field()
  premiumBypassExpiresAt: Date;

  @Column({ type: 'bigint', nullable: true, default: null })
  @Field()
  gradeId: number;

  @Column({ nullable: true, default: null })
  @Field({ nullable: true })
  stripeId: string;

  @Column({ nullable: true, default: null })
  @Field({ nullable: true })
  braintreeId: string;

  @Column({ type: 'json' })
  @Field(() => GraphQLJSONObject)
  metadata: any;

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  @Field()
  updatedAt: Date;

  @OneToMany(() => Purchase, purchase => purchase.user)
  @Field(() => [Purchase])
  purchases: Purchase[];

  @OneToMany(() => Comment, comment => comment.user)
  @Field(() => [Comment])
  comments: Comment[];

  @OneToMany(() => Vote, vote => vote.user)
  @Field(() => [Vote])
  votes: Vote[];

  @OneToMany(() => Mark, mark => mark.user)
  @Field(() => [Mark])
  marks: Mark[];
}
