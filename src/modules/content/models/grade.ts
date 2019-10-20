import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {Country} from './country';
import {Discipline} from './discipline';
import {Chapter} from './chapter';
import {Field, ID, ObjectType} from 'type-graphql';
import {User} from '../../users/models/user';

@Entity({name: 'disciplines'})
@ObjectType()
export class Grade {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  id: bigint;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @Column({type: 'boolean'})
  @Field()
  visible: boolean;

  @Column({type: 'smallint'})
  @Field()
  order: number;

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updatedAt: Date;

  @ManyToOne(type => Grade, grade => grade.children)
  @Field(type => Grade)
  parent: Grade;

  @OneToMany(type => Grade, grade => grade.parent)
  @Field(type => [Grade])
  children: Grade[];

  @ManyToOne(() => Country, country => country.grades)
  @Field(type => Country)
  country: Country;

  @OneToMany(() => Chapter, chapter => chapter.grade)
  @Field(() => [Chapter])
  chapters: Chapter[];

  @OneToMany(() => User, user => user.grade)
  @Field(() => [User])
  users: User[];
}
