import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Grade } from './grade';
import { Chapter } from './chapter';
import { Field, ID, ObjectType } from 'type-graphql';

@Entity({ name: 'disciplines' })
@ObjectType()
export class Discipline {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: bigint;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @Column({ type: 'boolean' })
  @Field()
  visible: boolean;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;

  @OneToMany(() => Chapter, chapter => chapter.discipline)
  @Field(() => [Chapter])
  chapters: Chapter[];
}
