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
import { Chapter } from './chapter';
import { Activity } from './activity';

export enum NotionType {
  FURTHER = 'further',
  NORMAL = 'normal',
  REMINDER = 'reminder',
}

@Entity({ name: 'notions' })
@ObjectType()
export class Notion {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(() => ID)
  id: bigint;

  @Column()
  @Field()
  name: string;

  @Column({ type: 'enum', enum: NotionType })
  @Field()
  type: NotionType;

  @Column({ type: 'boolean' })
  @Field()
  visible: boolean;

  @Column({ type: 'smallint' })
  @Field()
  order: number;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Chapter, chapter => chapter.notions)
  @JoinColumn({ name: 'chapter_id' })
  @Field(() => Chapter)
  chapter: Chapter;

  @OneToMany(() => Activity, activity => activity.notion)
  @Field(() => [Activity])
  activities: Activity[];
}
