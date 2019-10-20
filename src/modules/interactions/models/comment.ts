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
import {Module} from '../../content/models/module';
import {User} from '../../users/models/user';
import {Vote} from './vote';

// tslint:disable:variable-name

@Entity({name: 'comments'})
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @Column({type: 'text'})
  @Field()
  content: string;

  @ManyToOne(type => Comment, product => product.children)
  @JoinColumn({name: 'parent_id'})
  @Field()
  parent: Comment;

  @OneToMany(type => Comment, product => product.parent)
  @Field(type => [Comment])
  children: Comment[];

  @ManyToOne(type => Module, module => module.comments)
  @JoinColumn({name: 'module_id'})
  @Field(type => Module)
  module: Module;

  @ManyToOne(type => User, user => user.comments)
  @JoinColumn({name: 'user_id'})
  @Field(type => User)
  user: User;

  @OneToMany(type => Vote, vote => vote.comment)
  @Field(type => Vote)
  votes: Vote[];

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;
}
