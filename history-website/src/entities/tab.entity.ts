import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import {BlobEntity} from './blob.entity';

@Entity()
export class TabEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date

 
  @OneToMany(() => BlobEntity,(blob)=>blob.id ,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: false
  })
  @JoinColumn({name: "tab_id"})   
  blob: BlobEntity;

}