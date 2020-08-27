import { Controller, Get, Post, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './categories.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('categories')
export class CategoriesController {
    constructor(
        @InjectRepository(Category)
        private repository: Repository<Category>
    ){}
    
    @Get()
    async index() : Promise<Category[]> {
        return this.repository.find()
    }

    @Post()
    async store(@Body() body : Category): Promise<Category> {
        const category = this.repository.create(body)
        return this.repository.save(category)
    }
}
