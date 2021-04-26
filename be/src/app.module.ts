import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModel } from './models/test.model';
import { UserModel } from './models/user.model';
import { AppController } from './app.controller';
import { TestModule } from './service/test.module';
import { UserModule } from './service/user.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    TestModule,
    UserModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_IP,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ['dist/**/*.model.js', TestModel, UserModel],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
