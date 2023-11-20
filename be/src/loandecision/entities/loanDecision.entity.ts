import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
import { decisions } from '../decisions/decisions';


@ObjectType()
@Entity('loanDecision')
export class loanDecision {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    from: Date;
    
    @Field()
    @Column()
    to: Date;
  
    @Field(() => [User])
    @ManyToOne(() => User, (Users) => Users.loanDecisions)
    Decider: User[];

    @Field()
    @Column()
    Decision: decisions
}