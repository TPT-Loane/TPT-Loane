import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "src/user/user.module";
import { Loan } from "./entities/loan.entity";
import { LoanResolver } from "./resolvers/loan.resolver";
import { LoanService } from "./service/loan.service";

@Module({
  imports: [TypeOrmModule.forFeature([Loan]), UserModule],
  providers: [LoanService, LoanResolver],
})
export class LoanModule {}