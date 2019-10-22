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
  @Field(() => ID)
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

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;

  @OneToMany(() => Grade, grade => grade.country)
  @Field(() => Grade)
  grades: Grade[];
}
