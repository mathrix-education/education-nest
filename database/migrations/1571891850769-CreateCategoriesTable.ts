import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';

export class CreateCategoriesTable1571891850769 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'categories',
      columns: [
        CommonColumns.id,
        CommonColumns.name,
        CommonColumns.slug,
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories');
  }
}
