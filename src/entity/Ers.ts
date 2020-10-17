import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './Address';
import { Case } from './Case';
import { Check } from './Check';
import { Clothing } from './Clothing';
import { Dental } from './Dental';
import { Description } from './Description';
import { Desease } from './Desease';
import { Document } from './Document';
import { User } from './User';
import { Event } from './Event';
import { Feature } from './Feature';
import { Fingerprint } from './Fingerprint';
import { InternetResource } from './InternetResource';
import { Material } from './Material';
import { Phone } from './Phone';
import { Photo } from './Photo';
import { Progress } from './Progress';
import { Thing } from './Thing';

// @Index('W_ERS_ERS_NUMBER_UNIQ', ['ersNumber'], { unique: true })
@Index('W_ERS_PK', ['id'], { unique: true })
@Entity('W_ERS')
export class Ers {
  @Column('varchar2', { name: 'CHANGE_REASON', nullable: true, length: 12 })
  changeReason: string | null;

  @Column('varchar2', {
    name: 'CONTROL_RENEWAL_COURT',
    nullable: true,
    length: 200,
  })
  controlRenewalCourt: string | null;

  @Column('date', { name: 'CONTROL_RENEWAL_DATE', nullable: true })
  controlRenewalDate: Date | null;

  @Column('varchar2', {
    name: 'CONTROL_CLOSE_CAUSE',
    nullable: true,
    length: 4,
  })
  controlCloseCause: string | null;

  @Column('date', { name: 'CONTROL_CLOSE_DATE', nullable: true })
  controlCloseDate: Date | null;

  @Column('varchar2', { name: 'CONTROL_UNIT', nullable: true, length: 40 })
  controlUnit: string | null;

  @Column('date', { name: 'CONTROL_DATE', nullable: true })
  controlDate: Date | null;

  @Column('varchar2', { name: 'CONTROL_NUMBER', nullable: true, length: 60 })
  controlNumber: string | null;

  @Column('varchar2', { name: 'CONTROL_TYPE', nullable: true, length: 4 })
  controlType: string | null;

  @Column('varchar2', { name: 'FIND_TERRITORY', nullable: true, length: 40 })
  findTerritory: string | null;

  @Column('date', { name: 'FIND_DATE', nullable: true })
  findDate: Date | null;

  @Column('varchar2', { name: 'CLOSE_TEXT', nullable: true, length: 4000 })
  closeText: string | null;

  @Column('varchar2', { name: 'CLOSE_REASON', nullable: true, length: 12 })
  closeReason: string | null;

  @Column('varchar2', { name: 'FIND_PLACE', nullable: true, length: 8 })
  findPlace: string | null;

  @Column('varchar2', { name: 'FIND_HELP', nullable: true, length: 12 })
  findHelp: string | null;

  @Column('varchar2', { name: 'FIND_EMPLOYEE', nullable: true, length: 12 })
  findEmployee: string | null;

  @Column('varchar2', { name: 'WANTED_SERVICE', length: 8 })
  wantedService: string;

  @Column('char', { name: 'OFFICER', nullable: true, length: 2000 })
  officer: string | null;

  @Column('varchar2', { name: 'EO_NUMBER', nullable: true, length: 60 })
  eoNumber: string | null;

  @Column('date', { name: 'MESSAGE_DATE', nullable: true })
  messageDate: Date | null;

  @Column('clob', { name: 'ADDITIONAL_INFO', nullable: true })
  additionalInfo: string | null;

  @Column('varchar2', { name: 'LOST_EMPLOYEE', nullable: true, length: 4 })
  lostEmployee: string | null;

  @Column('date', { name: 'LOST_DATE', nullable: true })
  lostDate: Date | null;

  @Column('varchar2', { name: 'NICKNAME', nullable: true, length: 400 })
  nickname: string | null;

  @Column('varchar2', { name: 'CITIZEN', nullable: true, length: 40 })
  citizen: string | null;

  @Column('varchar2', { name: 'GENDER', nullable: true, length: 4 })
  gender: string | null;

  @Column('date', { name: 'BIRTH_DATE', nullable: true })
  birthDate: Date | null;

  @Column('varchar2', { name: 'MIDDLENAME_EN', nullable: true, length: 120 })
  middlenameEn: string | null;

  @Column('varchar2', { name: 'MIDDLENAME_RU', nullable: true, length: 120 })
  middlenameRu: string | null;

  @Column('varchar2', { name: 'MIDDLENAME_UK', nullable: true, length: 120 })
  middlenameUk: string | null;

  @Column('varchar2', { name: 'FIRSTNAME_EN', nullable: true, length: 120 })
  firstnameEn: string | null;

  @Column('varchar2', { name: 'FIRSTNAME_RU', nullable: true, length: 120 })
  firstnameRu: string | null;

  @Column('varchar2', { name: 'FIRSTNAME_UK', nullable: true, length: 120 })
  firstnameUk: string | null;

  @Column('varchar2', { name: 'LASTNAME_EN', nullable: true, length: 120 })
  lastnameEn: string | null;

  @Column('varchar2', { name: 'LASTNAME_RU', nullable: true, length: 120 })
  lastnameRu: string | null;

  @Column('varchar2', { name: 'LASTNAME_UK', nullable: true, length: 120 })
  lastnameUk: string | null;

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

  @Column('varchar2', { name: 'REGION', length: 40 })
  region: string;

  @Column('number', { name: 'ARC', nullable: true })
  arc: number | null;

  @Column('varchar2', { name: 'ERS_TYPE', nullable: true, length: 4 })
  ersType: string | null;

  @Column('varchar2', { name: 'FROM_UNIT', nullable: true, length: 40 })
  fromUnit: string | null;

  @Column('varchar2', { name: 'PUT_TYPE', length: 4, default: () => "'1'" })
  putType: string;

  @Column('varchar2', { name: 'REASON', length: 12 })
  reason: string;

  @Column('varchar2', { name: 'STATE', length: 4, default: () => "'0'" })
  state: string;

  @Column('varchar2', { name: 'SERVICE', nullable: true, length: 8 })
  service: string | null;

  @Column('varchar2', { name: 'UNIT', length: 40 })
  unit: string;

  @Column('varchar2', { name: 'NOTE', nullable: true, length: 4000 })
  note: string | null;

  @Column('varchar2', {
    name: 'LOST_CIRCUMSTANCES',
    nullable: true,
    length: 1020,
  })
  lostCircumstances: string | null;

  @Column('varchar2', { name: 'OCCUPATION', nullable: true, length: 512 })
  occupation: string | null;

  @Column('varchar2', {
    name: 'INTERPOL_END_MATERIALS_NUMBER',
    nullable: true,
    length: 160,
  })
  interpolEndMaterialsNumber: string | null;

  @Column('date', { name: 'INTERPOL_END_MATERIALS_DATE', nullable: true })
  interpolEndMaterialsDate: Date | null;

  @Column('date', { name: 'INTERPOL_END_DATE', nullable: true })
  interpolEndDate: Date | null;

  @Column('varchar2', {
    name: 'INTERPOL_START_MATERIALS_NUMBER',
    nullable: true,
    length: 160,
  })
  interpolStartMaterialsNumber: string | null;

  @Column('date', { name: 'INTERPOL_START_MATERIALS_DATE', nullable: true })
  interpolStartMaterialsDate: Date | null;

  @Column('date', { name: 'INTERPOL_START_DATE', nullable: true })
  interpolStartDate: Date | null;

  @Column('varchar2', { name: 'ERS_TEXT', nullable: true, length: 4000 })
  ersText: string | null;

  @Column('date', { name: 'ERS_DATE_OLD', nullable: true })
  ersDateOld: Date | null;

  @Column('varchar2', { name: 'ERS_NUMBER_OLD', nullable: true, length: 60 })
  ersNumberOld: string | null;

  @Column('date', { name: 'ERS_DATE', nullable: true, default: () => 'NULL' })
  ersDate: Date | null;

  @Column('varchar2', {
    primary: true,
    name: 'ERS_NUMBER',
    nullable: true,
    length: 96,
  })
  ersNumber: string | null;

  @Column('varchar2', { name: 'ORS_TYPE', nullable: true, length: 4 })
  orsType: string | null;

  @Column('clob', { name: 'CONVICTED', nullable: true })
  convicted: string | null;

  @Column('varchar2', { name: 'EO_UNIT', nullable: true, length: 40 })
  eoUnit: string | null;

  @Column('date', { name: 'EO_DATE', nullable: true })
  eoDate: Date | null;

  @Column('varchar2', { name: 'FIND_UNIT', nullable: true, length: 40 })
  findUnit: string | null;

  @Column('varchar2', { name: 'TRANSFER_UNIT', nullable: true, length: 40 })
  transferUnit: string | null;

  @Column('varchar2', { name: 'TRANSFER_REGION', nullable: true, length: 40 })
  transferRegion: string | null;

  @OneToMany(() => Address, (Address) => Address.Ers)
  Addresses: Address[];

  @OneToMany(() => Case, (Case) => Case.Ers)
  Cases: Case[];

  @OneToMany(() => Check, (Check) => Check.Ers)
  Checks: Check[];

  @OneToMany(() => Clothing, (Clothing) => Clothing.Ers)
  Clothing: Clothing[];

  @OneToMany(() => Dental, (Dental) => Dental.Ers)
  Dentals: Dental[];

  @OneToMany(() => Description, (Description) => Description.Ers)
  Descriptions: Description[];

  @OneToMany(() => Desease, (Desease) => Desease.Ers)
  Deseases: Desease[];

  @OneToMany(() => Document, (Document) => Document.Ers)
  Documents: Document[];

  @ManyToOne(() => User, (User) => User.Ers)
  @JoinColumn([{ name: 'USERNAME', referencedColumnName: 'username' }])
  User: User;

  @OneToMany(() => Event, (Event) => Event.Ers)
  Events: Event[];

  @OneToMany(() => Feature, (Feature) => Feature.Ers)
  Features: Feature[];

  @OneToMany(() => Fingerprint, (Fingerprint) => Fingerprint.Ers)
  Fingerprints: Fingerprint[];

  @OneToMany(() => InternetResource, (InternetResource) => InternetResource.Ers)
  InternetResources: InternetResource[];

  @OneToMany(() => Material, (Material) => Material.Ers)
  Materials: Material[];

  @OneToMany(() => Phone, (Phone) => Phone.Ers)
  Phones: Phone[];

  @OneToMany(() => Photo, (Photo) => Photo.Ers)
  Photos: Photo[];

  @OneToMany(() => Progress, (Progress) => Progress.Ers)
  Progresses: Progress[];

  @OneToMany(() => Thing, (Thing) => Thing.Ers)
  Things: Thing[];
}
