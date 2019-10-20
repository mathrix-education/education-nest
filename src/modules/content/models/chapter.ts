import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
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

  @Column({type: 'smallint'})
  @Field()
  order: number;

  @Column({type: 'boolean'})
  @Field()
  visible: boolean;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Grade, grade => grade.chapters)
  @JoinColumn({name: 'grade_id'})
  @Field(type => Grade)
  grade: Grade;

  @ManyToOne(() => Discipline, discipline => discipline.chapters)
  @JoinColumn({name: 'discipline_id'})
  @Field(type => Discipline)
  discipline: Discipline;

  @OneToMany(() => Notion, notion => notion.chapter)
  @Field(() => [Notion])
  notions: Notion[];
}
