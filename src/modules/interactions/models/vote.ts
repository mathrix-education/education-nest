import {
  Column,
  CreateDateColumn,
  Entity, Index,
  JoinColumn,
  ManyToOne,
  OneToMany, PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {User} from '../../users/models/user';
import {Comment} from './comment';

@Entity({ name: 'votes' })
@Index(['user_id', 'comment_id'], {unique: true})
@ObjectType()
export class Vote {
  @Column({ type: 'tinyint' })
  @Field()
  value: number;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;

  @ManyToOne(() => User, user => user.votes)
  @PrimaryColumn()
  @JoinColumn({name: 'user_id'})
  @Field(() => User)
  user: User;

  @ManyToOne(() => Comment, comment => comment.votes)
  @PrimaryColumn()
  @JoinColumn({name: 'comment_id'})
  @Field(() => Comment)
  comment: Comment;
}
