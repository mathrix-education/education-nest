import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {User} from '../../users/models/user';
import {Comment} from './comment';

@Entity({ name: 'votes' })
@ObjectType()
export class Vote {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(type => ID)
  id: number;

  @Column({ type: 'tinyint' })
  @Field()
  points: number;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;

  @ManyToOne(type => User, user => user.votes)
  @JoinColumn({name: 'user_id'})
  @Field(type => User)
  user: User;

  @ManyToOne(type => Comment, comment => comment.votes)
  @JoinColumn({name: 'comment_id'})
  @Field(type => Comment)
  comment: Comment;
}
