import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ActivityType } from './activity';
import { Grade } from './grade';
import { Field, ID, ObjectType } from 'type-graphql';

@Entity({ name: 'countries' })
@ObjectType()
export class Country {
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

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  @Field()
  updatedAt: Date;

  @OneToMany(() => Grade, grade => grade.country)
  @Field(type => Grade)
  grades: Grade[];
}
