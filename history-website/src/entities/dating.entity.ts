import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import {BlobEntity} from './blob.entity';

@Entity('dating')
export class DatingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dating_Name: string;

  @Column()
  dating_Year: number;

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
  @JoinColumn({name: "dating_id"})   
  blob: BlobEntity;

}