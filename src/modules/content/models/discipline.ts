import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {Grade} from './grade';
import {Chapter} from './chapter';

@Entity({name: 'disciplines'})
export class Discipline {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({type: 'boolean'})
  visible: boolean;

  @CreateDateColumn({type: 'datetime'})
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  updatedAt: Date;

  @ManyToMany(() => Grade, grade => grade.disciplines)
  grades: Grade[];

  @OneToMany(() => Chapter, chapter => chapter.discipline)
  chapters: Chapter[];
}
