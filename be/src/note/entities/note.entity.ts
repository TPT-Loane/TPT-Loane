import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity('Note')
export class Note {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ nullable: false })
    content: string;

    @Field()
    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

//   @Field(() => Item)
//   @ManyToOne(() => Item, item => item.notes)
//   Item: Item;
}
