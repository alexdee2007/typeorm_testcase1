import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Dental } from './Dental';

@Index('W_DENTAL_CONDITION_PK', ['id'], { unique: true })
@Entity('W_DENTAL_CONDITION')
export class DentalCondition {
  @Column('varchar2', { name: 'COMMENTS', nullable: true, length: 800 })
  comments: string | null;

  @Column('varchar2', { name: 'TOOTH_NAME', length: 8 })
  toothName: string;

  @Column('date', { name: 'DELETE_DATE', nullable: true })
  deleteDate: Date | null;

  @Column('date', { name: 'UPDATE_DATE', nullable: true })
  updateDate: Date | null;

  @Column('varchar2', { name: 'INSERT_USERNAME', nullable: true, length: 80 })
  insertUsername: string | null;

  @PrimaryGeneratedColumn({ type: 'number', name: 'ID' })
  id: number;

  @Column('varchar2', { name: 'TOOTH_CONDITION', length: 8 })
  toothCondition: string;

  @Column('date', { name: 'INSERT_DATE', nullable: true })
  insertDate: Date | null;

  @Column('varchar2', { name: 'DELETE_USERNAME', nullable: true, length: 80 })
  deleteUsername: string | null;

  @Column('varchar2', { name: 'UPDATE_USERNAME', nullable: true, length: 80 })
  updateUsername: string | null;

  @ManyToOne(() => Dental, (Dental) => Dental.DentalConditions)
  @JoinColumn([{ name: 'DENTAL_ID', referencedColumnName: 'id' }])
  Dental: Dental;
}
