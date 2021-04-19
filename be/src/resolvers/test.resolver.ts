import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

@Resolver()
export class TestResolver {
    @Query(() => String)
    sayHello(): string {
        return 'Hello World!';
    }
}