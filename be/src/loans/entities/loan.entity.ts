import { ObjectType, Field, Int} from '@nestjs/graphql';
import { Item } from 'src/loanitems/item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Loan {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;
  
  @Column()
  @Field(type => Date)
  dateFrom: Date;

  @Column()
  @Field(type => Date)
  dateTo: Date;

  @OneToMany(() => Item, item => item.loan)
  @Field(type => [Item])
  items: Item[];
}
