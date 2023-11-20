import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoanDecisionService } from './loanDecision.service';
import { CreateLoanDecisionInput } from './dto/create-loanDecision.input';
import { UpdateLoanDecisionUpdate } from './dto/update-loanDecision.input';

@Controller('loanDecision')
export class LoanDecisionController {
  constructor(private readonly loanDecisionService: LoanDecisionService) {}

  @Post()
  create(@Body() createLoanDecisionInput: CreateLoanDecisionInput) {
    return this.loanDecisionService.create(createLoanDecisionInput);
  }

  @Get()
  findAll() {
    return this.loanDecisionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.loanDecisionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateLoanDecisionUpdate: UpdateLoanDecisionUpdate) {
    return this.loanDecisionService.update(id, updateLoanDecisionUpdate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanDecisionService.remove(+id);
  }
}
