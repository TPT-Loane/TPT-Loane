import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { Item } from 'src/item/entities/item.entity';
import { Column, PrimaryGeneratedColumn, OneToMany, Entity } from 'typeorm';

@ObjectType()
@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column({type: "json", nullable: true})
  @Field(() => String)
  specs: string;

  @OneToMany(() => Category, (category) => category)
  @Field(() => [Category])
  categories: Category[];

  @OneToMany(() => Item, (item) => item.product)
  @Field(() => [Item])
  items: Item[];
}
