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
  @Field(type => ID)
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

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  @Field()
  updatedAt: Date;

  @ManyToMany(() => Grade, grade => grade.disciplines)
  @Field(type => [Grade])
  grades: Grade[];

  @OneToMany(() => Chapter, chapter => chapter.discipline)
  @Field(type => [Chapter])
  chapters: Chapter[];
}
