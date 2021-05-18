import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Item } from 'src/item/entities/item.entity';

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
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
   
    @Field(() => Int)
    @Column()
    itemId: number;

    @Field(() => Item)
    @ManyToOne(() => Item, item => item.note)
    item: Item;
}
