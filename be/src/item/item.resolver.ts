import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { Item } from './entities/item.entity';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Note } from 'src/note/entities/note.entity';
import { Inject } from '@nestjs/common';

@Resolver(() => Item)
export class ItemResolver {
  constructor(@Inject(ItemService) private itemService: ItemService) {}

  @Mutation(() => Item)
  createItem(@Args('createItemInput') createItemInput: CreateItemInput) {
    return this.itemService.createItem(createItemInput);
  }

  @Query(() => [Item])
  items() {
    return this.itemService.findAll();
  }

  @Query(() => Item, { name: 'item' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.itemService.findOne(id);
  }

  @Mutation(() => Item)
  updateItem(@Args('updateItemInput') updateItemInput: UpdateItemInput) {
    return this.itemService.update(updateItemInput);
  }

  @Mutation(() => Item)
  removeItem(@Args('id', { type: () => Int }) id: number) {
    return this.itemService.remove(id);
  }

  @ResolveField(returns => Note)
  note(@Parent() item: Item): Promise<Note> {
    return this.itemService.getNote(item.noteId);
  }
}
