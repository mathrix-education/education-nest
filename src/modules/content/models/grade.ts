import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {Country} from './country';
import {Discipline} from './discipline';
import {Chapter} from './chapter';

@Entity({name: 'disciplines'})
export class Grade {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({type: 'boolean'})
  visible: boolean;

  @Column({type: 'smallint'})
  order: number;

  @CreateDateColumn({type: 'datetime'})
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  updatedAt: Date;

  @ManyToOne(() => Country, country => country.grades)
  country: Country;

  @ManyToMany(() => Discipline, discipline => discipline.grades)
  disciplines: Discipline[];

  @ManyToOne(() => Chapter, chapter => chapter.grade)
  chapters: Chapter[];
}
