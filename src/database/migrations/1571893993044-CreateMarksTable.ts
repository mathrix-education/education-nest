import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';
import { MarkStatus } from '../../modules/interactions/models/mark';

export class CreateMarksTable1571893993044 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'marks',
      columns: [
        {
          name: 'module_id',
          type: 'bigint',
          unsigned: true,
          isPrimary: true,
        },
        {
          name: 'user_id',
          type: 'bigint',
          unsigned: true,
          isPrimary: true,
        },
        {
          name: 'status',
          type: 'enum',
          enum: [MarkStatus.COMPLETED, MarkStatus.TO_REVISE, MarkStatus.VIEW],
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
        {
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('marks');
  }
}
