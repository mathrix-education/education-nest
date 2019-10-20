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
import { Module } from '../../content/models/module';
import { User } from '../../users/models/user';
import { Vote } from './vote';

// tslint:disable:variable-name

@Entity({ name: 'comments' })
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(type => ID)
  id: number;

  @Column({ type: 'text' })
  @Field()
  content: string;

  @ManyToOne(type => Comment, product => product.children)
  @Field()
  parent: Comment;

  @OneToMany(type => Comment, product => product.parent)
  @Field(type => [Comment])
  children: Comment[];

  @ManyToOne(type => Module, module => module.comments)
  @Field(type => Module)
  module: Module;

  @ManyToOne(type => User, user => user.comments)
  @Field(type => User)
  user: User;

  @OneToMany(type => Vote, vote => vote.comment)
  @Field(type => Vote)
  votes: Vote[];

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  @Field()
  updatedAt: Date;
}
