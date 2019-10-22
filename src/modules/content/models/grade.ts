import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
  ManyToMany,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {Country} from './country';
import {Discipline} from './discipline';
import {Chapter} from './chapter';
import {Field, ID, ObjectType} from 'type-graphql';
import {User} from '../../users/models/user';

@Entity({ name: 'disciplines' })
@ObjectType()
export class Grade {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: bigint;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @Column({type: 'smallint'})
  @Field()
  order: number;

  @Column({type: 'boolean'})
  @Field()
  visible: boolean;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Grade, grade => grade.children)
  @JoinColumn({name: 'parent_id'})
  @Field(() => Grade)
  parent: Grade;

  @OneToMany(() => Grade, grade => grade.parent)
  @Field(() => [Grade])
  children: Grade[];

  @ManyToOne(() => Country, country => country.grades)
  @JoinColumn({name: 'country_id'})
  @Field(() => Country)
  country: Country;

  @OneToMany(() => Chapter, chapter => chapter.grade)
  @Field(() => [Chapter])
  chapters: Chapter[];

  @OneToMany(() => User, user => user.grade)
  @Field(() => [User])
  users: User[];
}
