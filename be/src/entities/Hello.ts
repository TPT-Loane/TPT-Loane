import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Hello extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;
}
