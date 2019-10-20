import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {User} from '../../users/models/user';
import {Product} from '../../trainings/models/product';
import {Vote} from '../../interactions/models/vote';

// tslint:disable:variable-name

@Entity({name: 'purchases'})
@ObjectType()
export class Purchase {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @Column({name: 'transaction_id'})
  @Field()
  transactionId: string;

  @ManyToOne(type => User, user => user.purchases)
  @JoinColumn({name: 'user_id'})
  @Field(type => User)
  user: User;

  @ManyToOne(type => Product, product => product.purchases)
  @JoinColumn({name: 'product_id'})
  @Field(type => Product)
  product: Product;

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  @Field()
  updatedAt: Date;
}
