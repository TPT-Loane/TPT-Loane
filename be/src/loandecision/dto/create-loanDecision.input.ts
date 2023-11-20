import { InputType, Field } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { decisions } from '../decisions/decisions';

@InputType()
export class CreateLoanDecisionInput {
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
