import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Category} from './category';
import {Field, ID, ObjectType} from 'type-graphql';

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

  @ManyToOne(type => Category, category => category.posts)
  @Field(type => Category)
  category: Category;
}
