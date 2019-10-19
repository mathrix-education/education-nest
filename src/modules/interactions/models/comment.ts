import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Module} from '../../content/models/module';
import {User} from '../../users/models/user';
import {Report} from './report';
import {Vote} from '../../../../dist/modules/interactions/models/vote';

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
  @Field()
  parent: Comment;

  @OneToMany(type => Comment, product => product.parent)
  @Field()
  children: Comment[];

  @ManyToOne(type => Module, module => module.comments)
  @Field()
  module: Module;

  @ManyToOne(type => User, user => user.comments)
  @Field()
  user: User;

  @OneToMany(type => Vote, vote => vote.comment)
  @Field()
  votes: Vote[];

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updatedAt: Date;
}
