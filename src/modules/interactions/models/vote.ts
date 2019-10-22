import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '../../users/models/user';
import { Comment } from './comment';

@Entity({ name: 'votes' })
@ObjectType()
export class Vote {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(type => ID)
  id: number;

  @Column({ type: 'tinyint' })
  @Field()
  points: number;

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  @Field()
  updatedAt: Date;

  @ManyToOne(type => User, user => user.votes)
  @Field(type => User)
  user: User;

  @ManyToOne(type => Comment, comment => comment.votes)
  @Field(type => Comment)
  comment: Comment;
}
