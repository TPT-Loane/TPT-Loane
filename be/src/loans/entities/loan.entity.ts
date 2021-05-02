import { ObjectType, Field, Int } from '@nestjs/graphql';
import { LoanItem } from 'src/loan-items/entities/loan-item.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Loan {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  loanItemId: number;

  @Column()
  @Field(() => String)
  dateFrom: string;

  @Column()
  @Field(() => String)
  dateTo: string;

  @ManyToOne(() => LoanItem, loanItem => loanItem.loans, { lazy: true })
  @Field(() => LoanItem)
  loanItem: LoanItem;
}
