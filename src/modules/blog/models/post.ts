import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Category} from './category';

@Entity({name: 'posts'})
export class Post {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @CreateDateColumn({type: 'datetime'})
  createAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  updatedAt: Date;

  @ManyToOne(type => Category, category => category.posts)
  category: Category;
}
