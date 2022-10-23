import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private readonly repository: Repository<Category>,
  ) {}

  async create(data: CreateCategoryDto) {
    const category = await this.repository.create({
      name: data.name,
      status: data.status,
    });

    await this.repository.save(category);

    return category;
  }

  async findAll() {
    const categorys = await this.repository.find();

    return categorys;
  }

  async findOne(id: number) {
    const category = await this.repository.findOneBy({ id: id });

    if (!category) throw new NotFoundException('category not found');

    return category;
  }

  async update(id: number, data: UpdateCategoryDto) {
    const category = await this.repository.preload({
      id,
      ...data,
    });

    if (!category) throw new NotFoundException('category not found');

    await this.repository.update(id, category);

    return category;
  }

  async remove(id: number) {
    const category = await this.findOne(id);

    return await this.repository.remove(category);
  }
}
