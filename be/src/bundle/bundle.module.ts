import { Module } from '@nestjs/common';
import { BundleService } from './bundle.service';
import { BundleResolver } from './bundle.resolver';

@Module({
  providers: [BundleResolver, BundleService]
})
export class BundleModule {}
