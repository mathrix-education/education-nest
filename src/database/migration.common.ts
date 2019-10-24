import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export const CommonColumns: { [key: string]: TableColumnOptions } = {
  id: {
    name: 'id',
    type: 'bigint',
    isPrimary: true,
  },
  name: {
    name: 'name',
    type: 'varchar',
  },
  slug: {
    name: 'slug',
    type: 'varchar',
  },
  order: {
    name: 'order',
    type: 'smallint',
    default: 0, // Highest priority
  },
  created_at: {
    name: 'created_at',
    type: 'datetime',
    default: 'CURRENT_TIMESTAMP',
  },
  updated_at: {
    name: 'updated_at',
    type: 'datetime',
    default: 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  },
};
