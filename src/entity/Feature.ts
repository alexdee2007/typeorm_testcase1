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

@Index('W_FEATURE_PK', ['id'], { unique: true })
@Entity('W_FEATURE')
export class Feature {
  @Column('varchar2', { name: 'FEATURE_BODY_AREA', nullable: true, length: 40 })
  featureBodyArea: string | null;

  @Column('date', { name: 'INSERT_DATE', nullable: true })
  insertDate: Date | null;

  @PrimaryGeneratedColumn({ type: 'number', name: 'ID' })
  id: number;

  @Column('date', { name: 'UPDATE_DATE', nullable: true })
  updateDate: Date | null;

  @Column('varchar2', {
    name: 'FEATURE_DESCRIPTION',
    nullable: true,
    length: 1020,
  })
  featureDescription: string | null;

  @Column('varchar2', { name: 'FEATURE_NAME', nullable: true, length: 16 })
  featureName: string | null;

  @Column('date', { name: 'DELETE_DATE', nullable: true })
  deleteDate: Date | null;

  @Column('varchar2', { name: 'DELETE_USERNAME', nullable: true, length: 80 })
  deleteUsername: string | null;

  @Column('varchar2', { name: 'UPDATE_USERNAME', nullable: true, length: 80 })
  updateUsername: string | null;

  @Column('varchar2', { name: 'INSERT_USERNAME', nullable: true, length: 80 })
  insertUsername: string | null;

  @ManyToOne(() => Ers, (Ers) => Ers.Features)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @OneToMany(() => Upload, (Upload) => Upload.Feature)
  Uploads: Upload[];
}
