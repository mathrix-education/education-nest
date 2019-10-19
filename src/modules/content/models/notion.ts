import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

export enum NotionType {
  FURTHER = 'further',
  NORMAL = 'normal',
  REMINDER = 'reminder',
}

export class Notion {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: bigint;

  @Column()
  name: string;

  @Column({type: 'enum', enum: NotionType})
  type: NotionType;

  @Column({type: 'boolean'})
  visible: boolean;

  @Column({type: 'smallint'})
  order: number;

  @CreateDateColumn({type: 'datetime'})
  createdAt: Date;

  @UpdateDateColumn({type: 'datetime'})
  updatedAt: Date;
}
