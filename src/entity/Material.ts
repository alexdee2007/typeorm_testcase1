import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from './Event';
import { Case } from './Case';
import { Ers } from './Ers';
import { Preventive } from './Preventive';
import { Progress } from './Progress';
import { Wanted } from './Wanted';
import { PrimaryMaterial } from './PrimaryMaterial';
import { Signer } from './Signer';
import { Upload } from './Upload';

@Index('W_MATERIAL_PK', ['id'], { unique: true })
// @Index('W_MATERIAL_PREVENTIVE_ID_UNIQ', ['SYS_NC00030$'], { unique: true })
// @Index('W_MATERIAL_PROGRESS_ID_UNIQ', ['SYS_NC00033$'], { unique: true })
// @Index('W_MATERIAL_WANTED_ID_UNIQ', ['SYS_NC00031$'], { unique: true })
@Entity('W_MATERIAL')
export class Material {
  @Column('blob', { name: 'MATERIAL', nullable: true })
  material: Buffer | null;

  @Column('varchar2', { name: 'CONTENT', nullable: true, length: 4000 })
  content: string | null;

  @Column('varchar2', { name: 'MATERIAL_TYPE', nullable: true, length: 20 })
  materialType: string | null;

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

  @Column('varchar2', { name: 'OUTGOING_REGION', nullable: true, length: 40 })
  outgoingRegion: string | null;

  @Column('varchar2', { name: 'INCOMING_REGION', nullable: true, length: 40 })
  incomingRegion: string | null;

  @Column('varchar2', { name: 'OUTGOING_SERVICE', nullable: true, length: 8 })
  outgoingService: string | null;

  @Column('varchar2', { name: 'INCOMING_SERVICE', nullable: true, length: 8 })
  incomingService: string | null;

  @Column('varchar2', {
    name: 'OUTGOING_USERNAME',
    nullable: true,
    length: 120,
  })
  outgoingUsername: string | null;

  @Column('varchar2', {
    name: 'INCOMING_USERNAME',
    nullable: true,
    length: 120,
  })
  incomingUsername: string | null;

  @Column('blob', { name: 'SIGN_EDS', nullable: true })
  signEds: Buffer | null;

  @Column('varchar2', { name: 'SIGN_OFFICER', nullable: true, length: 4000 })
  signOfficer: string | null;

  @Column('varchar2', { name: 'USERNAME', nullable: true, length: 120 })
  username: string | null;

  @Column('varchar2', { name: 'INCOMING_UNIT', nullable: true, length: 600 })
  incomingUnit: string | null;

  @Column('date', { name: 'INCOMING_DATE', nullable: true })
  incomingDate: Date | null;

  @Column('varchar2', { name: 'INCOMING_NUMBER', nullable: true, length: 80 })
  incomingNumber: string | null;

  @Column('varchar2', { name: 'OUTGOING_UNIT', nullable: true, length: 600 })
  outgoingUnit: string | null;

  @Column('date', { name: 'OUTGOING_DATE', nullable: true })
  outgoingDate: Date | null;

  @Column('varchar2', { name: 'OUTGOING_NUMBER', nullable: true, length: 160 })
  outgoingNumber: string | null;

  @OneToMany(() => Event, (Event) => Event.Material)
  Events: Event[];

  @ManyToOne(() => Case, (Case) => Case.Materials)
  @JoinColumn([{ name: 'CASE_ID', referencedColumnName: 'id' }])
  Case: Case;

  @ManyToOne(() => Ers, (Ers) => Ers.Materials)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;

  @ManyToOne(() => Preventive, (Preventive) => Preventive.Materials)
  @JoinColumn([{ name: 'PREVENTIVE_ID', referencedColumnName: 'id' }])
  Preventive: Preventive;

  @ManyToOne(() => Progress, (Progress) => Progress.Materials)
  @JoinColumn([{ name: 'PROGRESS_ID', referencedColumnName: 'id' }])
  Progress: Progress;

  @ManyToOne(() => Wanted, (Wanted) => Wanted.Materials)
  @JoinColumn([{ name: 'WANTED_ID', referencedColumnName: 'id' }])
  Wanted: Wanted;

  @OneToMany(
    () => PrimaryMaterial,
    (PrimaryMaterial) => PrimaryMaterial.Material,
  )
  PrimaryMaterials: PrimaryMaterial[];

  @OneToMany(() => Signer, (Signer) => Signer.Material)
  Signers: Signer[];

  @OneToMany(() => Upload, (Upload) => Upload.Material)
  Uploads: Upload[];
}
