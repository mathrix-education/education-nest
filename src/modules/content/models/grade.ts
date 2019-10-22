import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Country } from './country';
import { Discipline } from './discipline';
import { Chapter } from './chapter';
import { Field, ID, ObjectType } from 'type-graphql';

@Entity({ name: 'disciplines' })
@ObjectType()
export class Grade {
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

  @Column({ type: 'smallint' })
  @Field()
  order: number;

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Country, country => country.grades)
  @Field(type => Country)
  country: Country;

  @ManyToMany(() => Discipline, discipline => discipline.grades)
  @Field(type => [Discipline])
  disciplines: Discipline[];

  @ManyToOne(() => Chapter, chapter => chapter.grade)
  @Field(type => [Chapter])
  chapters: Chapter[];
}
