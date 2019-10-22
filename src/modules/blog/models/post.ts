import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn, RelationId,
  UpdateDateColumn
} from 'typeorm';
import {Category} from './category';
import {Field, ID, ObjectType} from 'type-graphql';
import {Module} from '../../content/models/module';
import {User} from '../../users/models/user';

@Entity({ name: 'posts' })
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(type => ID)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  slug: string;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Category, category => category.posts)
  @JoinColumn({name: 'category_id'})
  @Field(() => Category)
  category: Category;

  @ManyToOne(() => Module, module => module.posts)
  @JoinColumn({name: 'module_id'})
  @Field(() => Module)
  module: Module;

  @ManyToOne(() => User, user => user.posts)
  @JoinColumn({name: 'user_id'})
  @Field(() => User)
  user: User;
}
