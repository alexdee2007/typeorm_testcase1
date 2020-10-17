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

// @Index('W_FINGERPRINT_ERS_ID_UNIQ', ['SYS_NC00014$'], { unique: true })
@Index('W_FINGERPRINT_PK', ['id'], { unique: true })
@Entity('W_FINGERPRINT')
export class Fingerprint {
  @Column('varchar2', {
    name: 'FINGERPRINT_DENOMINATOR',
    nullable: true,
    length: 40,
  })
  fingerprintDenominator: string | null;

  @Column('varchar2', {
    name: 'FINGERPRINT_NUMERATOR',
    nullable: true,
    length: 40,
  })
  fingerprintNumerator: string | null;

  @Column('date', { name: 'FINGERPRINT_DATE', nullable: true })
  fingerprintDate: Date | null;

  @Column('varchar2', { name: 'FINGERPRINT_CARD', nullable: true, length: 4 })
  fingerprintCard: string | null;

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

  @Column('varchar2', {
    name: 'FINGERPRINT_UNIT',
    nullable: true,
    length: 1000,
  })
  fingerprintUnit: string | null;

  @ManyToOne(() => Ers, (Ers) => Ers.Fingerprints)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @OneToMany(() => Upload, (Upload) => Upload.Fingerprint)
  Uploads: Upload[];
}
