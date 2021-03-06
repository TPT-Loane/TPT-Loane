import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Note } from 'src/note/entities/note.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('item')
export class Item {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  regCode: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field(() => [Note])
  @OneToMany(() => Note, (note) => note.item, {
    eager: true,
  })
  notes: Note[];
}
