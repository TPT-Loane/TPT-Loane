import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TestResolver } from './resolvers/test.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { from } from 'rxjs';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '*',
      password: '*',
      database: 'test',
      entities: ['dist/**/*.model.js'],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [TestResolver],
})
export class AppModule {}
