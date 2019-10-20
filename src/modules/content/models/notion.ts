import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';

export enum NotionType {
  FURTHER = 'further',
  NORMAL = 'normal',
  REMINDER = 'reminder',
}

@Entity({name: 'notions'})
@ObjectType()
export class Notion {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: bigint;

  @Column()
  @Field()
  name: string;

  @Column({type: 'enum', enum: NotionType})
  @Field()
  type: NotionType;

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
}
