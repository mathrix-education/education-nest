import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';

export class CreatePurchasesTable1571893213845 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'purchases',
      columns: [
        CommonColumns.id,
        {
          name: 'transaction_id',
          type: 'varchar',
        },
        {
          name: 'product_id',
          type: 'bigint',
          unsigned: true,
        },
        {
          name: 'user_id',
          type: 'bigint',
          unsigned: true,
        },
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
      foreignKeys: [
        {
          columnNames: ['product_id'],
          referencedTableName: 'purchases',
          referencedColumnNames: ['id'],
        },
        {
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('purchases');
  }
}
