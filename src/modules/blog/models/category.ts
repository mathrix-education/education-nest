import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from './post';
import { Field, ID, ObjectType } from 'type-graphql';

@Entity({ name: 'categories' })
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(type => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  @Field()
  updatedAt: Date;

  @OneToMany(type => Post, post => post.category, {})
  @Field(type => [Post])
  posts: Post[];
}
