import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Body() createItemDto: CreateItemInput) {
    return this.itemService.createItem(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get('product/:id')
  getItemsByProductId(@Param('id') id: string) {
    return this.itemService.getItemsByProductId(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.itemService.findOne(+id);
  }

  @Patch(':id')
  update(@Body() updateItemDto: UpdateItemInput) {
    return this.itemService.update(updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(+id);
  }
}
