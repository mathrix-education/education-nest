import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '../../users/models/user';

export enum MarkStatus {
  COMPLETED = 'completed',
  TO_REVISE = 'to_revise',
  VIEW = 'view',
}

@Entity({ name: 'marks' })
@ObjectType()
export class Mark {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(() => ID)
  id: number;

  @Column({ type: 'enum', enum: MarkStatus })
  @Field()
  status: string;

  @ManyToOne(() => User, user => user.marks)
  @JoinColumn({ name: 'user_id' })
  @Field(() => User)
  user: User;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  @Field()
  updatedAt: Date;
}
