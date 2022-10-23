import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { providers } from '../providers';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [...providers, CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
