import { forwardRef, Module } from '@nestjs/common';
import { BundleService } from './bundle.service';
import { BundleResolver } from './bundle.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bundle } from './entities/bundle.entity';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Bundle]),forwardRef(()=> CategoryModule)],
  providers: [BundleResolver, BundleService],
  exports: [BundleService]
})
export class BundleModule {}
