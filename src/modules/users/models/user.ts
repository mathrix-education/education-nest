import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Purchase} from '../../payments/models/purchases';

// tslint:disable:variable-name

@Entity({name: 'users'})
@ObjectType()
export class User {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @Column()
  @Field({nullable: true})
  username: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  firstname: string;

  @Column()
  @Field()
  lastname: string;

  @Column()
  @Field()
  password: string;

  @Column({type: 'json'})
  @Field(type => [String])
  scopes: string[];

  @Column({type: 'uuid'})
  @Field()
  token: string;

  @Column()
  @Field()
  points: number;

  @Column({default: 0})
  @Field()
  daily: number;

  @Column({default: 0})
  @Field()
  daily_achievements: number;

  @Column({type: 'boolean'})
  @Field()
  premium_bypass: boolean;

  @Column({type: 'datetime'})
  @Field()
  premium_bypass_expires_at: Date;

  @Column({type: 'bigint'})
  @Field()
  grade_id: number;

  @Column()
  @Field()
  stripe_id: string;

  @Column()
  @Field()
  braintree_id: string;

  @Column({type: 'json'})
  @Field(type => [String])
  metadata: any;

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updatedAt: Date;

  @OneToMany(type => Purchase, purchase => purchase.user)
  @Field()
  purchases: Purchase[];

}
