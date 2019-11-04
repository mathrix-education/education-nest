import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Authorized, Field, ID, ObjectType } from 'type-graphql';
import {Purchase} from '../../payments/models/purchases';
import {Comment} from '../../interactions/models/comment';
import {Mark} from '../../interactions/models/mark';
import {Vote} from '../../interactions/models/vote';
import {GraphQLString} from 'graphql';
import {Post} from '../../blog/models/post';
import {Grade} from '../../content/models/grade';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(() => ID)
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

  @Column({type: 'json'})
  @Field(() => [String])
  scopes: string[];

  @Column({type: 'json'})
  @Field(() => [String])
  settings: any;

  @Column({ type: 'uuid' })
  @Field()
  token: string;

  @Column({ default: true })
  @Field()
  points: number;

  @Column({ default: 0 })
  @Field()
  daily: number;

  @Column({name: 'daily_achievements', default: 0})
  @Field()
  dailyAchievements: number;

  @Column({name: 'premium_bypass', type: 'boolean'})
  @Field()
  premiumBypass: boolean;

  @Column({name: 'premium_bypass_expires_at', type: 'datetime'})
  @Field()
  premiumBypassExpiresAt: Date;

  @Column({name: 'grade_id', type: 'bigint'})
  @Field()
  gradeId: number;

  @Column({name: 'stripe_id'})
  @Field()
  stripeId: string;

  @Column({name: 'braintree_id'})
  @Field()
  braintreeId: string;

  @Column({type: 'json'})
  @Field(() => GraphQLString)
  metadata: any;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Grade, grade => grade.users)
  @JoinColumn({name: 'grade_id'})
  @Field(() => Grade)
  grade: Grade;

  @OneToMany(() => Comment, comment => comment.user)
  @Field(() => [Comment])
  comments: Comment[];

  @OneToMany(() => Mark, mark => mark.user)
  @Field(() => [Mark])
  marks: Mark[];

  @OneToMany(() => Post, post => post.user)
  @Field(() => [Post])
  posts: Post[];

  @OneToMany(() => Purchase, purchase => purchase.user)
  @Field(() => [Purchase])
  purchases: Purchase[];

  @OneToMany(() => Vote, vote => vote.user)
  @Field(() => [Vote])
  votes: Vote[];
}
