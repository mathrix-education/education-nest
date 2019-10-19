import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Grade} from './grade';
import {Discipline} from './discipline';

@Entity({name: 'chapters'})
export class Chapter {
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

  @ManyToOne(() => Grade, grade => grade.chapters)
  grade: Grade;

  @ManyToOne(() => Discipline, discipline => discipline.chapters)
  discipline: Discipline;
}
