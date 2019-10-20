import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

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
  @Field(type => ID)
  id: bigint;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @Column({
    type: 'enum',
    enum: ActivityType,
  })
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

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  @Field()
  updatedAt: Date;
}
