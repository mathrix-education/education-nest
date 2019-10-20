import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Product} from './product';

@Entity({name: 'products'})
@ObjectType()
export class ProductProduct {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @OneToMany(type => Product, product => product.parent)
  @Field(type => [Product])
  parent: Product[];

  @OneToMany(type => Product, product => product.children)
  @Field(type => [Product])
  children: Product[];

  @Column({type: 'smallint'})
  @Field()
  order: number;
}
