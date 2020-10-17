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

@Index('W_CHECK_PK', ['id'], { unique: true })
@Entity('W_CHECK')
export class Check {
  @Column('number', { name: 'CHECK_RESULT_COUNT' })
  checkResultCount: number;

  @Column('clob', { name: 'CHECK_RESULT', nullable: true })
  checkResult: string | null;

  @Column('varchar2', { name: 'CHECK_OFFICER', length: 1000 })
  checkOfficer: string;

  @Column('varchar2', { name: 'CHECK_TYPE', length: 8 })
  checkType: string;

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

  @ManyToOne(() => Ers, (Ers) => Ers.Checks)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @OneToMany(() => Upload, (Upload) => Upload.Check)
  Uploads: Upload[];
}
