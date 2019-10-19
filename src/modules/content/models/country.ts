import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {ActivityType} from './activity';
import {Grade} from './grade';

@Entity({name: 'countries'})
export class Country {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({
    type: 'enum',
    enum: ActivityType,
  })
  type: ActivityType;

  @Column({type: 'boolean'})
  visible: boolean;

  @CreateDateColumn({type: 'datetime'})
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  updatedAt: Date;

  @OneToMany(() => Grade, grade => grade.country)
  grades: Grade[];
}
