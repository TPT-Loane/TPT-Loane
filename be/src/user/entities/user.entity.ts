import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../roles/user.roles';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  phone: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column()
  registration_date: Date;

  @Field()
  @Column()
  role: Role;

  @Field()
  @Column()
  full_name: string;

  @Field()
  @Column()
  personal_code: string;
}
