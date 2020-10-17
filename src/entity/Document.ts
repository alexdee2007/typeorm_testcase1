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

@Index('W_DOCUMENT_PK', ['id'], { unique: true })
@Entity('W_DOCUMENT')
export class Document {
  @Column('varchar2', { name: 'COMMENTS', nullable: true, length: 4000 })
  comments: string | null;

  @Column('varchar2', { name: 'DOC_UNIT', nullable: true, length: 512 })
  docUnit: string | null;

  @Column('date', { name: 'DOC_DATE', nullable: true })
  docDate: Date | null;

  @Column('varchar2', { name: 'DOC_NUMBER', nullable: true, length: 60 })
  docNumber: string | null;

  @Column('varchar2', { name: 'DOC_SERIES', nullable: true, length: 40 })
  docSeries: string | null;

  @Column('varchar2', { name: 'DOC_COUNTRY', nullable: true, length: 40 })
  docCountry: string | null;

  @Column('varchar2', { name: 'DOC_TYPE', nullable: true, length: 16 })
  docType: string | null;

  @Column('varchar2', { name: 'DOC_KIND', nullable: true, length: 8 })
  docKind: string | null;

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

  @ManyToOne(() => Ers, (Ers) => Ers.Documents)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @OneToMany(() => Upload, (Upload) => Upload.Document)
  Uploads: Upload[];
}
