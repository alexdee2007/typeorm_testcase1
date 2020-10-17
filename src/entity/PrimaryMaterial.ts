import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Material } from './Material';
import { Upload } from './Upload';

@Index('W_PRIMARY_MATERIAL_PK', ['id'], { unique: true })
@Entity('W_PRIMARY_MATERIAL')
export class PrimaryMaterial {
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

  @Column('varchar2', { name: 'MATERIAL_TYPE', length: 16 })
  materialType: string;

  @ManyToOne(() => Material, (Material) => Material.PrimaryMaterials)
  @JoinColumn([{ name: 'MATERIAL_ID', referencedColumnName: 'id' }])
  Material: Material;

  @OneToMany(() => Upload, (Upload) => Upload.PrimaryMaterial)
  Uploads: Upload[];
}
