import { Entity, Column, PrimaryGeneratedColumn, Unique, BeforeInsert, BeforeUpdate } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';


@ObjectType()
@Entity('users')
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 255, nullable: false })
  name: string;
  @Column({ length: 255, nullable: false})
  public password: string;
  
  @Field()
  @Column({ length: 255, nullable: false })
  @Unique('user_email_unique', ['email']) 
  email: string;

}
