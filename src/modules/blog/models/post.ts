import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Category} from './category';
import {Field, ID, ObjectType} from 'type-graphql';
import {Module} from '../../content/models/module';
import {User} from '../../users/models/user';

@Entity({name: 'posts'})
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  slug: string;

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Category, category => category.posts)
  @Field(() => Category)
  category: Category;

  @ManyToOne(() => Module, module => module.posts)
  @Field(() => Module)
  module: Module;

  @ManyToOne(() => User, user => user.posts)
  @Field(() => User)
  user: User;
}
