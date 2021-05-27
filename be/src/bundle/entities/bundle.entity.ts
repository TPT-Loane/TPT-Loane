import { ObjectType, Field, Int} from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('bundle')
export class Bundle {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  description: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date;

  @Field(() => [Category])
  @ManyToMany(() => Category, category => category.bundles)
  @JoinTable()
  categories: Category[];

}
