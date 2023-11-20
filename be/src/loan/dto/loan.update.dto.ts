import { InputType, PartialType } from "@nestjs/graphql";
import { CreateLoanDTO } from "./loan.create.dto";

@InputType()
export class UpdateLoanDTO extends PartialType(CreateLoanDTO) {}