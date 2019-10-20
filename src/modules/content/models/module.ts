import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field} from 'type-graphql';
import {Comment} from '../../interactions/models/comment';
import {Report} from '../../interactions/models/report';
import {Product} from '../../trainings/models/product';
import {Vote} from '../../interactions/models/vote';

export enum ModuleType {
  COURSE = 'course',
  FLASHCARD = 'flashcard',
  MCQ = 'mcq',
  TEST = 'test',
}

@Entity({name: 'modules'})
export class Module {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: bigint;

  @Column({
    type: 'enum',
    enum: ModuleType,
  })
  type: ModuleType;

  @Column({type: 'json'})
  content: object;

  @Column({type: 'json'})
  questions: string[] | string[][];

  @Column({type: 'json'})
  choices: string[];

  @Column({type: 'json'})
  solutions: Array<Array<string | number>>;

  @Column({type: 'json'})
  corrections: string[][];

  @Column({type: 'json', nullable: true})
  options: object;

  @Column({type: 'boolean'})
  visible: boolean;

  @Column({type: 'smallint'})
  order: number;

  @Column()
  seoIndex: boolean;

  @Column()
  seoTitle: string;

  @Column()
  seoSlug: string;

  @Column({type: 'simple-array'})
  seoKeywords: string;

  @Column()
  seoDescription: string;

  @CreateDateColumn({type: 'datetime'})
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  updatedAt: Date;

  @OneToMany(type => Comment, comment => comment.module)
  @Field(type => [Comment])
  comments: Comment[];

  @OneToMany(type => Report, report => report.module)
  @Field(type => [Report])
  reports: Report[];

  @OneToMany(type => Product, product => product.module)
  @Field(type => [Product])
  products: Product[];
}
