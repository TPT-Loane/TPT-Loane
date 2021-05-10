import { ObjectType, Field, Int } from '@nestjs/graphql';
import { LoanItems } from 'src/loan-items/entities/loan-item.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Loans {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field(()=> String)
  dateFrom: string;

  @Column()
  @Field(() => String)
  dateTo: string;

  @Column()
  @Field(type => Int)
  loanItemId: number;

  @ManyToOne(() => LoanItems, loanItems => loanItems.loans, {lazy: true})
  @Field(() => LoanItems)
  loanItems: LoanItems;
}
