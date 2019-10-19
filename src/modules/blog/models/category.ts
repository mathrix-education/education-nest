import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Post} from './post';

@Entity({name: 'categories'})
export class Category {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @CreateDateColumn({type: 'datetime'})
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  updatedAt: Date;

  @OneToMany(type => Post, post => post.category, {})
  posts: Post[];
}
