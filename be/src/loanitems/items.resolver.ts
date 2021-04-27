import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { Loan } from 'src/loans/entities/loan.entity';
import { CreateItemInput } from './dto/create-item.input';
import { Item } from './item.entity';
import { ItemsService } from './items.service';

@Resolver(of => Item)
export class ItemsResolver {
    constructor(private itemsService: ItemsService) {}

    @Query(returns => Item)
    getItem(@Args('id', {type: () => Int}) id: number): Promise<Item> {
        return this.itemsService.findById(id)
    }

    @Query(returns => [Item])
    items(): Promise<Item[]> {
        return this.itemsService.findAll()
    }

    @ResolveField(returns => Loan)
    loan(@Parent() item: Item): Promise<Loan> {
        return this.itemsService.getLoans(item.loanId);
    }

    @Mutation(returns => Item)
    createItem(@Args('createItemInput') createItemInput: CreateItemInput): Promise<Item> {
        return this.itemsService.createItem(createItemInput);
    }

    // @Mutation(returns => void)
    // deleteItem(@Args('createItemInput') createItemInput: CreateItemInput): Promise<Item> {
    //     return this.itemsService.createItem(createItemInput);
    // }
}
