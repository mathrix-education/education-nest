import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {User} from '../../users/models/user';
import {Product} from '../../trainings/models/product';

// tslint:disable:variable-name

@Entity({name: 'purchases'})
@ObjectType()
export class Purchase {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @Column()
  @Field()
  transactionId: string;

  @ManyToOne(type => User, user => user.purchases)
  @Field()
  user: User;

  @ManyToOne(type => Product, product => product.purchases)
  @Field()
  product: Product;

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updatedAt: Date;
}
