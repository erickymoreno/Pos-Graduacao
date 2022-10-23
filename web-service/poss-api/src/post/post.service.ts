import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from '../post/entities/post.entity';

@Injectable()
export class PostService {
  categoryService: any;
  constructor(
    @Inject('POST_REPOSITORY')
    private readonly repository: Repository<Post>,
  ) {}

  async create(data: CreatePostDto) {
    const category = await this.categoryService.findOne(data.category);

    const post = await this.repository.create({
      ...data,
      slug: slugify(data.title, { lower: true }),
      category: category,
    });

    await this.repository.insert(post);

    return post;
  }

  async findAll() {
    const posts = await this.repository.find();

    return posts;
  }

  async findOne(id: number) {
    const post = await this.repository.findOneBy({ id: id });

    if (!post) throw new NotFoundException('post not found');

    return post;
  }

  async update(id: number, data: UpdatePostDto) {
    const category = await this.categoryService.findOne(data.category);

    const post = await this.repository.preload({
      id,
      ...data,
      category,
    });

    if (!post) throw new NotFoundException('Post not found');

    await this.repository.update(id, post);

    return post;
  }

  async remove(id: number) {
    const post = await this.findOne(id);

    return await this.repository.remove(post);
  }
}
function slugify(title: string, arg1: { lower: boolean }): string {
  throw new Error('Function not implemented.');
}
