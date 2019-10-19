import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';

@Entity({name: 'transactions'})
@ObjectType()
export class Transaction {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @Column()
  @Field()
  type: string;

  @Column()
  @Field()
  planId: string;

  @Column({type: 'double'})
  @Field()
  amount: number;

  @Column({type: 'double'})
  @Field()
  refundedAmount: number;

  @Column()
  @Field()
  refundedTransactionId: string;

  @Column()
  @Field()
  customerId: string;

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updatedAt: Date;
}
