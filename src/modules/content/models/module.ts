import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Comment} from '../../interactions/models/comment';
import {Report} from '../../interactions/models/report';
import {Product} from '../../trainings/models/product';
import {GraphQLJSONObject} from 'graphql-type-json';
import {Post} from "../../blog/models/post";
import {Activity} from "./activity";

export enum ModuleType {
  COURSE = 'course',
  FLASHCARD = 'flashcard',
  MCQ = 'mcq',
  TEST = 'test',
}

@Entity({ name: 'modules' })
@ObjectType()
export class Module {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(type => ID)
  id: bigint;

  @Column({
    type: 'enum',
    enum: ModuleType,
  })
  @Field()
  type: ModuleType;

  @Column({ type: 'json' })
  @Field(type => GraphQLJSONObject)
  content: object;

  @Column({ type: 'json' })
  @Field(type => GraphQLJSONObject)
  questions: string[] | string[][];

  @Column({ type: 'json' })
  @Field(type => GraphQLJSONObject)
  choices: string[];

  @Column({ type: 'json' })
  @Field(type => GraphQLJSONObject)
  solutions: Array<Array<string | number>>;

  @Column({ type: 'json' })
  @Field(type => GraphQLJSONObject)
  corrections: string[][];

  @Column({ type: 'json', nullable: true })
  @Field(type => GraphQLJSONObject)
  options: object;

  @Column({ type: 'boolean' })
  @Field(type => GraphQLJSONObject)
  visible: boolean;

  @Column({name: 'seo_index'})
  @Field()
  seoIndex: boolean;

  @Column({name: 'seo_title'})
  @Field()
  seoTitle: string;

  @Column({name: 'seo_slug'})
  @Field()
  seoSlug: string;

  @Column({name: 'seo_keywords', type: 'simple-array'})
  @Field()
  seoKeywords: string;

  @Column({name: 'seo_description'})
  @Field()
  seoDescription: string;

  @Column({type: 'smallint'})
  @Field()
  order: number;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;

  @ManyToOne(() => Activity, activity => activity.modules)
  @JoinColumn({name: 'activity_id'})
  @Field(() => Activity)
  activity: Activity;

  @OneToMany(type => Comment, comment => comment.module)
  @Field(type => [Comment])
  comments: Comment[];

  @OneToMany(type => Post, post => post.module)
  @Field(type => [Post])
  posts: Post[];

  @OneToMany(type => Product, product => product.module)
  @Field(type => [Product])
  products: Product[];

  @OneToMany(type => Report, report => report.module)
  @Field(type => [Report])
  reports: Report[];
}
