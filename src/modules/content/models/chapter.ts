import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {Grade} from './grade';
import {Discipline} from './discipline';
import {Field, ID, ObjectType} from 'type-graphql';
import {Notion} from "./notion";

@Entity({name: 'chapters'})
@ObjectType()
export class Chapter {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  id: bigint;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @Column({type: 'boolean'})
  @Field()
  visible: boolean;

  @Column({type: 'smallint'})
  @Field()
  order: number;

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Grade, grade => grade.chapters)
  @Field(type => Grade)
  grade: Grade;

  @ManyToOne(() => Discipline, discipline => discipline.chapters)
  @Field(type => Discipline)
  discipline: Discipline;

  @OneToMany(() => Notion, notion => notion.chapter)
  @Field(() => [Notion])
  notions: Notion[];
}
