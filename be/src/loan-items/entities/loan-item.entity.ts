import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Loans } from "src/loans/entities/loan.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class LoanItems {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    desc: string;

    @OneToMany(() => Loans, loans => loans.loanItems, {lazy: true})
    @Field(() => [Loans])
    loans: Loans[];
} 
