import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';

export class CreateDisciplinesTable1571880255531 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'disciplines',
      columns: [
        CommonColumns.id,
        CommonColumns.name,
        CommonColumns.slug,
        {
          name: 'beta',
          type: 'boolean',
          default: false,
        },
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('disciplines');
  }
}
