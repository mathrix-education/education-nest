import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Module} from '../../content/models/module';
import {Vote} from './vote';

@Entity({name: 'reports'})
@ObjectType()
export class Report {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @Column({type: 'text'})
  @Field()
  context: string;

  @Column()
  @Field()
  type: string;

  @Column({type: 'text'})
  @Field()
  content: string;

  @Column()
  @Field()
  status: string;

  @ManyToOne(type => Module, module => module.reports)
  @Field(type => Module)
  module: Module;

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updatedAt: Date;
}
