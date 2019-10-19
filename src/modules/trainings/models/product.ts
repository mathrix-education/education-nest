import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field, ID, ObjectType} from 'type-graphql';
import {Module} from '../../content/models/module';
import {Purchase} from '../../payments/models/purchases';

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

  @ManyToOne(type => Product, product => product.children)
  @Field()
  parent: Product;

  @OneToMany(type => Product, product => product.parent)
  @Field()
  children: Product[];

  @ManyToOne(type => Module, module => module.products)
  @Field()
  module: Module;

  @OneToMany(type => Purchase, purchase => purchase.product)
  @Field()
  purchases: Purchase[];

  @CreateDateColumn({type: 'datetime'})
  @Field()
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  @Field()
  updateAt: Date;
}
