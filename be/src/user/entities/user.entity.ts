import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Role } from '../roles/user.roles';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column({ unique: true })
  phone: string;

  @Field()
  @Column()
  email: string;

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
  @Column({ unique: true })
  personal_code: string;
}
