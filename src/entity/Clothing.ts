import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ers } from './Ers';
import { Upload } from './Upload';

@Index('W_CLOTHING_PK', ['id'], { unique: true })
@Entity('W_CLOTHING')
export class Clothing {
  @Column('varchar2', { name: 'NOTE', nullable: true, length: 4000 })
  note: string | null;

  @Column('varchar2', {
    name: 'CLOTHING_DESCRIPTION',
    nullable: true,
    length: 1020,
  })
  clothingDescription: string | null;

  @Column('varchar2', { name: 'CLOTHING_MATERIAL', nullable: true, length: 8 })
  clothingMaterial: string | null;

  @Column('varchar2', { name: 'CLOTHING_COLOR', nullable: true, length: 8 })
  clothingColor: string | null;

  @Column('varchar2', { name: 'CLOTHING_NAME', nullable: true, length: 16 })
  clothingName: string | null;

  @Column('date', { name: 'DELETE_DATE', nullable: true })
  deleteDate: Date | null;

  @Column('varchar2', { name: 'DELETE_USERNAME', nullable: true, length: 80 })
  deleteUsername: string | null;

  @Column('date', { name: 'UPDATE_DATE', nullable: true })
  updateDate: Date | null;

  @Column('varchar2', { name: 'UPDATE_USERNAME', nullable: true, length: 80 })
  updateUsername: string | null;

  @Column('date', { name: 'INSERT_DATE', nullable: true })
  insertDate: Date | null;

  @Column('varchar2', { name: 'INSERT_USERNAME', nullable: true, length: 80 })
  insertUsername: string | null;

  @PrimaryGeneratedColumn({ type: 'number', name: 'ID' })
  id: number;

  @ManyToOne(() => Ers, (Ers) => Ers.Clothing)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @OneToMany(() => Upload, (Upload) => Upload.Clothing)
  Uploads: Upload[];
}
