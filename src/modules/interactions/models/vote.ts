import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {User} from '../../users/models/user';

@Entity({name: 'votes'})
@ObjectType()
export class Vote {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @Column({type: 'tinyint'})
  @Field()
  points: number;

  @ManyToOne(type => User, user => user.purchases)
  @Field()
  user: User;

  @ManyToOne(type => Comment, comment => comment.votes)
  @Field()
  comment: Comment;

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updatedAt: Date;
}
