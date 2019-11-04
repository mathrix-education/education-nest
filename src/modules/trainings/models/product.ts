import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { Module } from '../../content/models/module';
import { Purchase } from '../../payments/models/purchases';
import { ProductProduct } from './product_product';

export enum ProductType {
  PACK = 'pack',
  TRAINING = 'training',
  SECTION = 'section',
  LESSON = 'lesson',
}

@Entity({ name: 'products' })
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(() => ID)
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

  @Column({ type: 'enum', enum: ProductType })
  @Field()
  type: string;

  @Column({ type: 'text' })
  @Field()
  description: string;

  @Column({ type: 'double' })
  @Field()
  price: number;

  @Column({ type: 'boolean' })
  @Field()
  visible: boolean;

  @Column({ type: 'boolean' })
  @Field()
  buyable: boolean;

  @Column()
  @Field()
  order: number;

  @ManyToOne(() => Module, module => module.products)
  @JoinColumn({ name: 'module_id' })
  @Field(() => Module)
  module: Module;

  @OneToMany(() => ProductProduct, productproduct => productproduct.parent)
  @Field(() => [ProductProduct])
  parents: ProductProduct[];

  @OneToMany(() => ProductProduct, productproduct => productproduct.child)
  @Field(() => [ProductProduct])
  children: ProductProduct[];

  @OneToMany(() => Purchase, purchase => purchase.product)
  @Field(() => [Purchase])
  purchases: Purchase[];

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime' })
  @Field()
  updatedAt: Date;
}
