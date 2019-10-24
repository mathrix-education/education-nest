import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Notion } from './notion';
import { Module } from './module';

export enum ActivityType {
  COURSE = 'course',
  EXERCISE = 'exercise',
  FLASHCARD = 'flashcard',
  TEST = 'test',
  VIDEO = 'video',
}

@Entity({ name: 'activities' })
@ObjectType()
export class Activity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: bigint;

  @Column()
  @Field()
  name: string;

  @Column({ type: 'enum', enum: ActivityType })
  @Field()
  type: ActivityType;

  @Column({ type: 'boolean' })
  @Field()
  visible: boolean;

  @Column({ type: 'smallint' })
  @Field()
  order: number;

  @Column({ type: 'boolean' })
  @Field()
  premium: boolean;

  @Column({ type: 'boolean' })
  @Field()
  reviewed: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Notion, notion => notion.activities)
  @JoinColumn({ name: 'notion_id' })
  @Field(() => Notion)
  notion: Notion;

  @OneToMany(() => Module, module => module.activity)
  @Field(() => [Module])
  modules: Module[];
}
