import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ers } from './Ers';
import { Material } from './Material';

@Index('W_EVENT_PK', ['id'], { unique: true })
@Entity('W_EVENT')
export class Event {
  @Column('date', { name: 'DONE_DATE', nullable: true })
  doneDate: Date | null;

  @Column('varchar2', { name: 'DONE_CONTENT', nullable: true, length: 4000 })
  doneContent: string | null;

  @Column('varchar2', { name: 'DONE_TYPE', nullable: true, length: 20 })
  doneType: string | null;

  @Column('date', { name: 'TERM_DATE', nullable: true })
  termDate: Date | null;

  @Column('varchar2', { name: 'EVENT_TYPE', nullable: true, length: 20 })
  eventType: string | null;

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

  @PrimaryGeneratedColumn({ type: 'number', name: 'ID' })
  id: number;

  @Column('varchar2', { name: 'INSERT_USERNAME', nullable: true, length: 80 })
  insertUsername: string | null;

  @Column('varchar2', { name: 'CONTENT', nullable: true, length: 2000 })
  content: string | null;

  @ManyToOne(() => Ers, (Ers) => Ers.Events)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @ManyToOne(() => Material, (Material) => Material.Events)
  @JoinColumn([{ name: 'MATERIAL_ID', referencedColumnName: 'id' }])
  Material: Material;
}
