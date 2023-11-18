import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateBundleInput } from './dto/create-bundle.input';
import { UpdateBundleInput } from './dto/update-bundle.input';
import { Bundle } from './entities/bundle.entity';

@Injectable()
export class BundleService {
  constructor(@InjectRepository(Bundle) private readonly bundleRepository: Repository<Bundle>, private readonly connection: Connection) {}

createBundle(createBundleInput: CreateBundleInput) {
  const newBundle = this.bundleRepository.create(createBundleInput);

  return this.bundleRepository.save(newBundle);
}

findAll() {
  return this.bundleRepository.find({});
}

async findOne(id: number) {
  const bundle = await this.bundleRepository.findOne(id);
  if (!bundle)  throw new NotFoundException(`Bundle #${id} not found`);   
  return bundle;
}

async findBundlesByCategoryId(categoryId: number) {
  const findBundlesByCategoryId = await this.connection
  .getRepository(Bundle)
  .createQueryBuilder("bundle")
  .leftJoinAndSelect("bundle.categories", "category")
  .getMany();


  return findBundlesByCategoryId;
}

async update(updateBundleInput: UpdateBundleInput, id: number) {
  const bundle = await this.bundleRepository.preload({
    id,
    ...updateBundleInput
  })
  if (!bundle) throw new NotFoundException(`Bundle #${id} not found`);
  return this.bundleRepository.save(bundle);
}

remove(id: number) {
  return this.bundleRepository.delete(id);
  }

}