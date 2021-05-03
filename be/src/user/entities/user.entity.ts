import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../roles/user.roles';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  registration_date: Date;

  @Column()
  role: Role;

  @Column()
  full_name: string;

  @Column()
  personal_code: number;
}
