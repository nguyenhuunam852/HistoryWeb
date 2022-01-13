import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { DatingEntity } from './dating.entity';
import { TabEntity } from './tab.entity';


@Entity()
export class BlobEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date

  @ManyToOne(type => TabEntity, tab => tab.id)
  tab: TabEntity;

  @ManyToOne(type => DatingEntity, dating => dating.id)
  dating: DatingEntity;
  
}