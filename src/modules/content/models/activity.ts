import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

export enum ActivityType {
  COURSE = 'course',
  EXERCISE = 'exercise',
  FLASHCARD = 'flashcard',
  TEST = 'test',
  VIDEO = 'video',
}

export class Activity {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({
    type: 'enum',
    enum: ActivityType,
  })
  type: ActivityType;

  @Column({type: 'boolean'})
  visible: boolean;

  @Column({type: 'smallint'})
  order: number;

  @Column({type: 'boolean'})
  premium: boolean;

  @Column({type: 'boolean'})
  reviewed: boolean;

  @CreateDateColumn({type: 'datetime'})
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  updatedAt: Date;
}
