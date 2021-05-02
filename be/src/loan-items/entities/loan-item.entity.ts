import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Loan } from 'src/loans/entities/loan.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class LoanItem {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  desc: string;

  @OneToMany(() => Loan, loan => loan.loanItem, { lazy: true, nullable: true })
  @Field(() => [Loan])
  loans: Loan[];
}
