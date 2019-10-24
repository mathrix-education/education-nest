export const CommonColumns = {
  id: {
    name: 'id',
    type: 'bigint',
    unsigned: true,
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
  visible: {
    name: 'visible',
    type: 'boolean',
    default: false,
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
