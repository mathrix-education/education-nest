import {
  Column,
  CreateDateColumn,
  Entity, Index,
  JoinColumn,
  ManyToOne, PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from '../../users/models/user';
import {Module} from '../../content/models/module';

export enum MarkStatus {
  COMPLETED = 'completed',
  TO_REVISE = 'to_revise',
  VIEW = 'view',
}

@Entity({ name: 'marks' })
@Index(['user_id', 'module_id'], {unique: true})
@ObjectType()
export class Mark {
  @Column({ type: 'enum', enum: MarkStatus })
  @Field()
  status: string;

  @ManyToOne(() => User, user => user.marks)
  @PrimaryColumn()
  @JoinColumn({ name: 'user_id' })
  @Field(() => User)
  user: User;

  @ManyToOne(() => Module, module => module.marks)
  @PrimaryColumn()
  @JoinColumn({ name: 'module_id' })
  @Field(() => Module)
  module: Module;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  @Field()
  updatedAt: Date;
}
