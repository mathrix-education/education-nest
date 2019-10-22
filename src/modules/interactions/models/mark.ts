import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {User} from '../../users/models/user';
import {Vote} from './vote';

// tslint:disable:variable-name

@Entity({ name: 'marks' })
@ObjectType()
export class Mark {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(type => ID)
  id: number;

  @Column()
  @Field()
  status: string;

  @ManyToOne(type => User, user => user.marks)
  @JoinColumn({name: 'user_id'})
  @Field(type => User)
  user: User;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;
}
