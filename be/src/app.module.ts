import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModel } from './models/test.model';
import { AppController } from './app.controller';
import { TestModule } from './service/test.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TestModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.IP,
      port: parseInt(process.env.PORT),
      username: process.env.DATABASE_USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: ['dist/**/*.model.js', TestModel],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
