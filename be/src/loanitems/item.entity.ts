import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Loan } from "src/loans/entities/loan.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Item {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;
    
    @Column()
    @Field()
    desc: string;

    @Column()
    @Field(type => Int, {nullable: true})
    loanId: number;

    @ManyToOne(() => Loan, loan => loan.items)
    @Field(type => [Loan], {nullable: true})
    loan?: Loan;
}