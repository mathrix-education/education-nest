import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './models/category';
import { Post } from './models/post';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Post])],
})
export class BlogModule {}
