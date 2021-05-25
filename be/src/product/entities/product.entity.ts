import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { Item } from 'src/item/entities/item.entity';
import { Column, PrimaryGeneratedColumn, OneToMany, Entity } from 'typeorm';

@ObjectType()
@Entity('Product')
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

  @Column({type: "json"})
  @Field(() => String)
  specs: string;

  @OneToMany(() => Category, (category) => category)
  @Field(() => [Category])
  category: Category[];

  @OneToMany(() => Item, (item) => item)
  @Field(() => [Item])
  items: Item[];
}
