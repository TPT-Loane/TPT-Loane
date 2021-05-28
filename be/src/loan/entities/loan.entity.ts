import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Loan {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.loans, { 
      onDelete: 'CASCADE',
    })
    user: User;
    
    @Column()
    @Field()
    message: string;
}