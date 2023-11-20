import { CreateBundleInput } from './create-bundle.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBundleInput extends PartialType(CreateBundleInput) {
}
