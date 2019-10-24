import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';
import { ReportStatus, ReportType } from '../../src/modules/interactions/models/report';

export class CreateReportsTable1571893509413 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'reports',
      columns: [
        CommonColumns.id,
        {
          name: 'status',
          type: 'enum',
          enum: [ReportStatus.TODO, ReportStatus.DONE],
        },
        {
          name: 'type',
          type: 'enum',
          enum: [
            ReportType.DISPLAY,
            ReportType.SPELLING,
            ReportType.WRONG,
            ReportType.OTHER,
          ],
        },
        {
          name: 'content',
          type: 'text',
        },
        {
          name: 'module_id',
          type: 'bigint',
          unsigned: true,
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
    await queryRunner.dropTable('reports');
  }
}
