import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';

export class CreateProductProductTable1571892995347 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'product_product',
      columns: [
        {
          name: 'parent_id',
          type: 'bigint',
          unsigned: true,
          isPrimary: true,
        },
        {
          name: 'child_id',
          type: 'bigint',
          unsigned: true,
          isPrimary: true,
        },
        CommonColumns.order,
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
      foreignKeys: [
        {
          columnNames: ['parent_id'],
          referencedTableName: 'products',
          referencedColumnNames: ['id'],
        },
        {
          columnNames: ['child_id'],
          referencedTableName: 'products',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
