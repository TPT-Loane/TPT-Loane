import { InputType, Int, Field } from '@nestjs/graphql';
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class CreateBundleInput {
  @Field()
  @Column()
  description: string;
}

