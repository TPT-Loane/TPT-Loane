import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoanItem } from "./entities/loanitem.entity";
import { LoanItemResolver } from "./resolvers/loanitem.resolver";
import { LoanItemService } from "./service/loanitem.service";

@Module({
  imports: [TypeOrmModule.forFeature([LoanItem])],
  providers: [LoanItemService, LoanItemResolver],
})
export class LoanItemModule {}