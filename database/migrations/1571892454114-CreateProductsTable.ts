import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';
import { ProductType } from '../../src/modules/trainings/models/product';

export class CreateProductsTable1571892454114 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products',
      columns: [
        CommonColumns.id,
        CommonColumns.name,
        CommonColumns.slug,
        {
          name: 'type',
          type: 'enum',
          enum: [
            ProductType.PACK,
            ProductType.TRAINING,
            ProductType.SECTION,
            ProductType.LESSON,
          ],
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'price',
          type: 'smallint',
          isNullable: true,
        },
        {
          name: 'buyable',
          type: 'boolean',
          default: true,
        },
        CommonColumns.visible,
        CommonColumns.order,
        {
          name: 'module_id',
          type: 'bigint',
          unsigned: true,
          isNullable: true,
        },
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
      foreignKeys: [
        {
          columnNames: ['module_id'],
          referencedTableName: 'modules',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
