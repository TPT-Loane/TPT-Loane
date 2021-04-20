import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';


@ObjectType()
@Entity('items')
export class TestModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({length: 255, nullable: false})
    name: string;
}