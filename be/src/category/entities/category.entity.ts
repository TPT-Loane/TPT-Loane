import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/product/entities/product.entity';
import { Bundle } from 'src/bundle/entities/bundle.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Category {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'Name of the Category' })
  @Column()
  name: string;

  @Field({
    description: 'Can this category be used in a bundle (as an item)',
    defaultValue: false,
  })
  @Column()
  bundelable: boolean;

  @Field(() => [Category], { description: 'Subcategories' })
  @OneToMany(() => Category, (category) => category.parentCategory, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    cascade: true,
  })
  subCategories: Category[];

  @Field(() => [Category], { description: 'Parent categories', nullable: true })
  @ManyToOne(() => Category, (category) => category.subCategories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  parentCategory: Category;

  @ManyToMany(() => Product, (product) => product.categories)
  @Field(() => [Product])
  products: Product[];
  
  @Field(() => [Bundle])
  @ManyToMany(type => Bundle, bundle => bundle.categories)
  bundles: Bundle[];
}
