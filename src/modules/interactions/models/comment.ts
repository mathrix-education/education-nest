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

@Entity({ name: 'comments' })
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(() => ID)
  id: number;

  @Column({ type: 'text' })
  @Field()
  content: string;

  @ManyToOne(() => Comment, product => product.children)
  @JoinColumn({name: 'parent_id'})
  @Field()
  parent: Comment;

  @OneToMany(() => Comment, product => product.parent)
  @Field(() => [Comment])
  children: Comment[];

  @ManyToOne(() => Module, module => module.comments)
  @JoinColumn({name: 'module_id'})
  @Field(() => Module)
  module: Module;

  @ManyToOne(() => User, user => user.comments)
  @JoinColumn({name: 'user_id'})
  @Field(() => User)
  user: User;

  @OneToMany(() => Vote, vote => vote.comment)
  @Field(() => Vote)
  votes: Vote[];

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;
}
