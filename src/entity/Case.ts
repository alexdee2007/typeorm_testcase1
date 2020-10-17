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
import { Material } from './Material';
import { Preventive } from './Preventive';
import { Wanted } from './Wanted';

@Index('W_CASE_PK', ['id'], { unique: true })
@Entity('W_CASE')
export class Case {
  @Column('varchar2', { name: 'AGAINST_EMPLOYEE', nullable: true, length: 12 })
  againstEmployee: string | null;

  @Column('varchar2', { name: 'OFFICER_PHONE', nullable: true, length: 800 })
  officerPhone: string | null;

  @Column('date', { name: 'CASE_PROCESS_DATE', nullable: true })
  caseProcessDate: Date | null;

  @Column('varchar2', {
    name: 'CASE_PROCESS_NUMBER',
    nullable: true,
    length: 80,
  })
  caseProcessNumber: string | null;

  @Column('varchar2', { name: 'CASE_PROCESS_TYPE', nullable: true, length: 8 })
  caseProcessType: string | null;

  @Column('varchar2', { name: 'OFFICER_FULLNAME', nullable: true, length: 200 })
  officerFullname: string | null;

  @Column('date', { name: 'ERRAND_DATE', nullable: true })
  errandDate: Date | null;

  @Column('varchar2', { name: 'ERRAND_NUMBER', nullable: true, length: 80 })
  errandNumber: string | null;

  @Column('clob', { name: 'CRIMINAL_ARTICLES', nullable: true })
  criminalArticles: string | null;

  @Column('date', { name: 'CASE_CLOSE_DATE', nullable: true })
  caseCloseDate: Date | null;

  @Column('date', { name: 'CASE_SUSPEND_DATE', nullable: true })
  caseSuspendDate: Date | null;

  @Column('date', { name: 'VERDICT_DATE', nullable: true })
  verdictDate: Date | null;

  @Column('varchar2', { name: 'VERDICT_TERM', nullable: true, length: 200 })
  verdictTerm: string | null;

  @Column('varchar2', { name: 'CASE_UNIT', nullable: true, length: 400 })
  caseUnit: string | null;

  @Column('date', { name: 'CASE_DATE', nullable: true })
  caseDate: Date | null;

  @Column('varchar2', { name: 'CASE_NUMBER', nullable: true, length: 80 })
  caseNumber: string | null;

  @Column('varchar2', { name: 'CASE_TYPE', nullable: true, length: 8 })
  caseType: string | null;

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

  @ManyToOne(() => Ers, (Ers) => Ers.Cases)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @OneToMany(() => Material, (Material) => Material.Case)
  Materials: Material[];

  @OneToMany(() => Preventive, (Preventive) => Preventive.Case)
  Preventives: Preventive[];

  @OneToMany(() => Wanted, (Wanted) => Wanted.Case)
  Wanteds: Wanted[];
}
