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
import { Ers } from './Ers';

// @Index('W_PROGRESS_INPROCESS_UNIQ', ['SYS_NC00023$'], { unique: true })
@Index('W_PROGRESS_PK', ['id'], { unique: true })
@Entity('W_PROGRESS')
export class Progress {
  @Column('varchar2', {
    name: 'TRANSFER_USERNAME',
    nullable: true,
    length: 120,
  })
  transferUsername: string | null;

  @Column('varchar2', { name: 'STATE', nullable: true, length: 4 })
  state: string | null;

  @Column('varchar2', { name: 'DELETE_USERNAME', nullable: true, length: 80 })
  deleteUsername: string | null;

  @Column('varchar2', { name: 'UPDATE_USERNAME', nullable: true, length: 80 })
  updateUsername: string | null;

  @Column('date', { name: 'DELETE_DATE', nullable: true })
  deleteDate: Date | null;

  @Column('varchar2', { name: 'TRANSFER_UNIT', nullable: true, length: 40 })
  transferUnit: string | null;

  @Column('varchar2', { name: 'TRANSFER_REGION', nullable: true, length: 40 })
  transferRegion: string | null;

  @Column('varchar2', { name: 'CHANGE_REASON', nullable: true, length: 12 })
  changeReason: string | null;

  @Column('varchar2', { name: 'STATE_TEXT', nullable: true, length: 4000 })
  stateText: string | null;

  @Column('varchar2', { name: 'CLOSE_REASON', nullable: true, length: 12 })
  closeReason: string | null;

  @Column('varchar2', { name: 'FIND_PLACE', nullable: true, length: 8 })
  findPlace: string | null;

  @Column('varchar2', { name: 'FIND_HELP', nullable: true, length: 12 })
  findHelp: string | null;

  @Column('varchar2', { name: 'FIND_EMPLOYEE', nullable: true, length: 12 })
  findEmployee: string | null;

  @Column('varchar2', { name: 'FIND_UNIT', nullable: true, length: 40 })
  findUnit: string | null;

  @Column('varchar2', { name: 'FIND_TERRITORY', nullable: true, length: 40 })
  findTerritory: string | null;

  @Column('date', { name: 'FIND_DATE', nullable: true })
  findDate: Date | null;

  @Column('varchar2', { name: 'RESOLUTION_TYPE', nullable: true, length: 4 })
  resolutionType: string | null;

  @Column('date', { name: 'UPDATE_DATE', nullable: true })
  updateDate: Date | null;

  @Column('date', { name: 'INSERT_DATE', nullable: true })
  insertDate: Date | null;

  @Column('varchar2', { name: 'INSERT_USERNAME', nullable: true, length: 80 })
  insertUsername: string | null;

  @PrimaryGeneratedColumn({ type: 'number', name: 'ID' })
  id: number;

  @OneToMany(() => Material, (Material) => Material.Progress)
  Materials: Material[];

  @ManyToOne(() => Ers, (Ers) => Ers.Progresses)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;
}
