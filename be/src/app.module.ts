import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { LoanModule } from './loan/loan.module';
import { LoanItemModule } from './loanItem/loan-item.module';
import { LoanItem } from './loanItem/entities/loan-item.entity';
import { Loan } from './loan/entities/loan.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_IP,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [LoanItem, Loan],
      synchronize: true,
    }),
    LoanModule,
    LoanItemModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
