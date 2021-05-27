import { Field, ObjectType } from "@nestjs/graphql";
import { Item } from "src/item/entities/item.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class LoanItem {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field()
  @Column()
  returnDate: Date;

  @Field(() => Item)
  @ManyToOne(() => Item, (item) => item.loanItems, {
    onDelete: "CASCADE",
    cascade: true,
  })
  item: Item;
}