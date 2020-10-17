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

// @Index('W_DESEASE_ERS_ID_UNIQ', ['SYS_NC00010$'], { unique: true })
@Index('W_DESEASE_PK', ['id'], { unique: true })
@Entity('W_DESEASE')
export class Desease {
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

  @Column('varchar2', { name: 'MEDICAL_FILE', nullable: true, length: 80 })
  medicalFile: string | null;

  @Column('clob', { name: 'DESEASES', nullable: true })
  deseases: string | null;

  @ManyToOne(() => Ers, (Ers) => Ers.Deseases)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @OneToMany(() => Upload, (Upload) => Upload.Desease)
  Uploads: Upload[];
}
