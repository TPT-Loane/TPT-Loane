import { ObjectType, Field, Int } from '@nestjs/graphql';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LoanItem } from '../../loan-Items/entities/loan-item.entity';

@Entity()
@ObjectType()
export class Loan {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  @Column()
  dateFrom!: string;

  @Field(() => String)
  @Column()
  dateTo!: string;

  @Field(() => LoanItem)
  @ManyToOne(() => LoanItem, loanItem => loanItem.loans, { lazy: true })
  loanItem: LoanItem;

  @Field()
  @Column()
  loanItemId: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}