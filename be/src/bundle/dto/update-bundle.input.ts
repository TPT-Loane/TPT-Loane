import { CreateBundleInput } from './create-bundle.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBundleInput extends PartialType(CreateBundleInput) {
}
