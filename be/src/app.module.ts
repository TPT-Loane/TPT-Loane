import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { NoteModule } from './note/note.module';
import { ItemModule } from './item/item.module';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.RDS_HOSTNAME,
      port: parseInt(process.env.RDS_PORT),
      username: process.env.RDS_USER,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DB_NAME,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../fe/', 'build/'),
      exclude: ['/graphql', '/api*'],
      serveStaticOptions: {
        dotfiles: 'allow',
      },
    }),
    CategoryModule,
    NoteModule,
    ItemModule,
    UserModule,
  ],
  exports: [NoteModule, ItemModule],
  // controllers: [AppController], // Uncommenting this will DESTROY earth!!
})
export class AppModule {}
