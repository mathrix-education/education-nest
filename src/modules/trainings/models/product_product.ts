import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Product} from './product';

@Entity({name: 'products_products'})
@ObjectType()
export class ProductProduct {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @ManyToOne(() => Product, product => product.parents)
  @JoinColumn({name: 'parent_id'})
  @Field(type => Product)
  parent: Product;

  @ManyToOne(type => Product, product => product.children)
  @JoinColumn({name: 'child_id'})
  @Field(type => Product)
  child: Product;

  @Column({type: 'smallint'})
  @Field()
  order: number;
}
