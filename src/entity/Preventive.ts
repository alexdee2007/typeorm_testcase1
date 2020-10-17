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
import { Case } from './Case';

// @Index('W_PREVENTIVE_CASE_ID_UNIQ', ['case_id'], { unique: true })
@Index('W_PREVENT_MEASURE_PK', ['id'], { unique: true })
@Entity('W_PREVENTIVE')
export class Preventive {
  @Column('date', { name: 'END_DATE', nullable: true })
  endDate: Date | null;

  @Column('varchar2', { name: 'MEASURE_TYPE', nullable: true, length: 8 })
  measureType: string | null;

  @Column('varchar2', { name: 'INSERT_USERNAME', nullable: true, length: 80 })
  insertUsername: string | null;

  @Column('varchar2', { name: 'OFFICER_FULLNAME', nullable: true, length: 200 })
  officerFullname: string | null;

  @Column('varchar2', { name: 'UNIT', nullable: true, length: 600 })
  unit: string | null;

  @Column('varchar2', { name: 'DELETE_USERNAME', nullable: true, length: 80 })
  deleteUsername: string | null;

  @Column('varchar2', { name: 'UPDATE_USERNAME', nullable: true, length: 80 })
  updateUsername: string | null;

  @Column('date', { name: 'START_DATE', nullable: true })
  startDate: Date | null;

  @Column('date', { name: 'DELETE_DATE', nullable: true })
  deleteDate: Date | null;

  @Column('date', { name: 'UPDATE_DATE', nullable: true })
  updateDate: Date | null;

  @Column('date', { name: 'INSERT_DATE', nullable: true })
  insertDate: Date | null;

  @PrimaryGeneratedColumn({ type: 'number', name: 'ID' })
  id: number;

  @OneToMany(() => Material, (Material) => Material.Preventive)
  Materials: Material[];

  @ManyToOne(() => Case, (Case) => Case.Preventives)
  @JoinColumn([{ name: 'CASE_ID', referencedColumnName: 'id' }])
  Case: Case;
}
