import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity('items')
export class Note {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ length: 255, nullable: false })
    content: string;

    @Field()
    @Column({ nullable: false })
    createdAt: Date;

//   @Field(() => Item)
//   @ManyToOne(() => Item, item => item.notes)
//   Item: Item;
}
