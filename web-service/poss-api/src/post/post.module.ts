import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { providers } from '../providers';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [DatabaseModule, CategoryModule],
  controllers: [PostController],
  providers: [...providers, PostService],
})
export class PostModule {}
