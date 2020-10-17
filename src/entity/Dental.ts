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
import { DentalCondition } from './DentalCondition';
import { Upload } from './Upload';

// @Index('W_DENTAL_ERS_ID_UNIQ', ['SYS_NC00009$'], { unique: true })
@Index('W_DENTAL_PK', ['id'], { unique: true })
@Entity('W_DENTAL')
export class Dental {
  @PrimaryGeneratedColumn({ type: 'number', name: 'ID' })
  id: number;

  @Column('varchar2', { name: 'DELETE_USERNAME', nullable: true, length: 80 })
  deleteUsername: string | null;

  @Column('varchar2', { name: 'UPDATE_USERNAME', nullable: true, length: 80 })
  updateUsername: string | null;

  @Column('varchar2', { name: 'INSERT_USERNAME', nullable: true, length: 80 })
  insertUsername: string | null;

  @Column('date', { name: 'UPDATE_DATE', nullable: true })
  updateDate: Date | null;

  @Column('clob', { name: 'DENTAL_CLINIC', nullable: true })
  dentalClinic: string | null;

  @Column('date', { name: 'INSERT_DATE', nullable: true })
  insertDate: Date | null;

  @Column('date', { name: 'DELETE_DATE', nullable: true })
  deleteDate: Date | null;

  @ManyToOne(() => Ers, (Ers) => Ers.Dentals)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @OneToMany(() => DentalCondition, (DentalCondition) => DentalCondition.Dental)
  DentalConditions: DentalCondition[];

  @OneToMany(() => Upload, (Upload) => Upload.Dental)
  Uploads: Upload[];
}
