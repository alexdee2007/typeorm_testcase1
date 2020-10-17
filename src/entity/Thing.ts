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

@Index('W_THING_PK', ['id'], { unique: true })
@Entity('W_THING')
export class Thing {
  @Column('varchar2', { name: 'THING_FEATURE', nullable: true, length: 8 })
  thingFeature: string | null;

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

  @Column('varchar2', { name: 'NOTE', nullable: true, length: 4000 })
  note: string | null;

  @Column('varchar2', {
    name: 'THING_DESCRIPTION',
    nullable: true,
    length: 4000,
  })
  thingDescription: string | null;

  @Column('varchar2', { name: 'THING_COLOR', nullable: true, length: 8 })
  thingColor: string | null;

  @Column('varchar2', { name: 'THING_NUMBER', nullable: true, length: 84 })
  thingNumber: string | null;

  @Column('varchar2', { name: 'THING_SERIES', nullable: true, length: 80 })
  thingSeries: string | null;

  @Column('varchar2', { name: 'THING_NAME', nullable: true, length: 24 })
  thingName: string | null;

  @Column('date', { name: 'DELETE_DATE', nullable: true })
  deleteDate: Date | null;

  @ManyToOne(() => Ers, (Ers) => Ers.Things)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @OneToMany(() => Upload, (Upload) => Upload.Thing)
  Uploads: Upload[];
}
