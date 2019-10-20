import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Module} from '../../content/models/module';
import {Purchase} from '../../payments/models/purchases';
import {Vote} from '../../interactions/models/vote';
import {ProductProduct} from "./product_product";

@Entity({name: 'products'})
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn({type: 'bigint'})
  @Field(type => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @Column()
  @Field()
  image: string;

  @Column()
  @Field()
  type: string;

  @Column({type: 'text'})
  @Field()
  description: string;

  @Column({type: 'double'})
  @Field()
  price: number;

  @Column({type: 'boolean'})
  @Field()
  visible: boolean;

  @Column({type: 'boolean'})
  @Field()
  buyable: boolean;

  @Column()
  @Field()
  order: number;

  @ManyToOne(type => ProductProduct, productproduct => productproduct.parent)
  @Field(type => ProductProduct)
  parent: ProductProduct;

  @ManyToOne(type => ProductProduct, productproduct => productproduct.children)
  @Field(type => ProductProduct)
  children: ProductProduct;

  @ManyToOne(type => Module, module => module.products)
  @Field(type => Module)
  module: Module;

  @OneToMany(type => Purchase, purchase => purchase.product)
  @Field(type => [Purchase])
  purchases: Purchase[];

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updateAt: Date;
}
