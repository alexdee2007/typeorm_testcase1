import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ers } from './Ers';

// @Index('W_DESCRIPTION_ERS_ID_UNIQ', ['SYS_NC00027$'], { unique: true })
@Index('W_DESCRIPTION_PK', ['id'], { unique: true })
@Entity('W_DESCRIPTION')
export class Description {
  @Column('number', { name: 'AGE', nullable: true })
  age: number | null;

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

  @Column('varchar2', { name: 'NATIONALITY', nullable: true, length: 12 })
  nationality: string | null;

  @Column('varchar2', { name: 'GENDER', nullable: true, length: 4 })
  gender: string | null;

  @Column('varchar2', { name: 'CALLED_SELF', nullable: true, length: 800 })
  calledSelf: string | null;

  @Column('clob', { name: 'PHYSICAL_DESCRIPTION', nullable: true })
  physicalDescription: string | null;

  @Column('varchar2', { name: 'BLOOD_TYPE', nullable: true, length: 8 })
  bloodType: string | null;

  @Column('varchar2', { name: 'OSS_NUMBER', nullable: true, length: 40 })
  ossNumber: string | null;

  @Column('varchar2', { name: 'TOMB_NUMBER', nullable: true, length: 80 })
  tombNumber: string | null;

  @Column('varchar2', { name: 'CORPSE_NUMBER', nullable: true, length: 40 })
  corpseNumber: string | null;

  @Column('varchar2', { name: 'BURIAL_PLACE', nullable: true, length: 320 })
  burialPlace: string | null;

  @Column('date', { name: 'BURIAL_DATE', nullable: true })
  burialDate: Date | null;

  @Column('varchar2', { name: 'DEATH_CAUSE_F560', nullable: true, length: 40 })
  deathCauseF560: string | null;

  @Column('date', { name: 'AUTOPSY_DATE', nullable: true })
  autopsyDate: Date | null;

  @Column('varchar2', { name: 'DEATH_CAUSE', nullable: true, length: 160 })
  deathCause: string | null;

  @Column('varchar2', { name: 'CORPSE_CONDITION', nullable: true, length: 120 })
  corpseCondition: string | null;

  @Column('number', { name: 'DEATH_AGO', nullable: true })
  deathAgo: number | null;

  @Column('varchar2', { name: 'RACE', nullable: true, length: 4 })
  race: string | null;

  @Column('number', { name: 'SHOE_SIZE', nullable: true })
  shoeSize: number | null;

  @Column('number', { name: 'HEADWEAR_SIZE', nullable: true })
  headwearSize: number | null;

  @Column('number', { name: 'HEIGHT', nullable: true })
  height: number | null;

  @ManyToOne(() => Ers, (Ers) => Ers.Descriptions)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;
}
