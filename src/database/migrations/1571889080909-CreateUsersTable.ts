import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CommonColumns } from '../migration.common';

export class CreateUsersTable1571889080909 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        CommonColumns.id,
        {
          name: 'username',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
        },
        {
          name: 'firstname',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'lastname',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'scopes',
          type: 'json',
        },
        {
          name: 'token',
          type: 'char',
          length: '36',
        },
        {
          name: 'points',
          type: 'int',
        },
        {
          name: 'daily',
          type: 'int',
          default: 10,
        },
        {
          name: 'daily_achievements',
          type: 'int',
          default: 0,
        },
        {
          name: 'premium_bypass',
          type: 'boolean',
          default: false,
        },
        {
          name: 'premium_bypass_expires_at',
          type: 'datetime',
          isNullable: true,
          default: null,
        },
        {
          name: 'settings',
          type: 'json',
        },
        {
          name: 'metadata',
          type: 'json',
        },
        {
          name: 'stripe_id',
          type: 'varchar',
          isNullable: true,
          default: null,
        },
        {
          name: 'braintree_id',
          type: 'varchar',
          isNullable: true,
          default: null,
        },
        {
          name: 'grade_id',
          type: 'bigint',
          unsigned: true,
          isNullable: true,
          default: null,
        },
        CommonColumns.created_at,
        CommonColumns.updated_at,
      ],
      foreignKeys: [
        {
          columnNames: ['grade_id'],
          referencedTableName: 'grades',
          referencedColumnNames: ['id'],
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
