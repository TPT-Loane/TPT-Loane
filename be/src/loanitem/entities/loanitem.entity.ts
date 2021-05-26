import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class LoanItem {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field()
  @Column()
  returnDate: Date;
}