import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./categories/categories.entity";

@Module({
  imports: [
    CategoriesModule,
    TypeOrmModule.forRoot({
      //@ts-ignore
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Category]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
