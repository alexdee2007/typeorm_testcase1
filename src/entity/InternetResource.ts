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

@Index('W_INTERNET_RESOURCE_PK', ['id'], { unique: true })
@Entity('W_INTERNET_RESOURCE')
export class InternetResource {
  @Column('varchar2', { name: 'NOTE', nullable: true, length: 4000 })
  note: string | null;

  @Column('varchar2', { name: 'WORK_RESULT', nullable: true, length: 4000 })
  workResult: string | null;

  @Column('varchar2', { name: 'URL', nullable: true, length: 4000 })
  url: string | null;

  @Column('varchar2', { name: 'NICKNAME', nullable: true, length: 80 })
  nickname: string | null;

  @Column('varchar2', { name: 'RESOURCE_TYPE', nullable: true, length: 12 })
  resourceType: string | null;

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

  @ManyToOne(() => Ers, (Ers) => Ers.InternetResources)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @OneToMany(() => Upload, (Upload) => Upload.InternetResource)
  Uploads: Upload[];
}
