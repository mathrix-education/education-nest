import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
})
export class TrainingsModule {}
