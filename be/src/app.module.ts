import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModel } from './models/test.model';
import { AppController } from './app.controller';
import { TestModule } from './service/test.module';

@Module({
  imports: [
    TestModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'test',
      entities: ['dist/**/*.model.js', TestModel],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
