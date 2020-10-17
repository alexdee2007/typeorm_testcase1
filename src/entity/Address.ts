import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ers } from './Ers';

@Index('W_ADDRESS_PK', ['id'], { unique: true })
@Entity('W_ADDRESS')
export class Address {
  @Column('blob', { name: 'MAP', nullable: true })
  map: Buffer | null;

  @Column('varchar2', { name: 'COMMENTS', nullable: true, length: 4000 })
  comments: string | null;

  @Column('varchar2', { name: 'LONGITUDE', nullable: true, length: 100 })
  longitude: string | null;

  @Column('varchar2', { name: 'LATITUDE', nullable: true, length: 100 })
  latitude: string | null;

  @Column('varchar2', { name: 'HIGHWAY_M', nullable: true, length: 20 })
  highwayM: string | null;

  @Column('varchar2', { name: 'HIGHWAY_KM', nullable: true, length: 20 })
  highwayKm: string | null;

  @Column('varchar2', { name: 'HIGHWAY', nullable: true, length: 20 })
  highway: string | null;

  @Column('number', { name: 'FACILITY_BRANCH', nullable: true })
  facilityBranch: number | null;

  @Column('varchar2', { name: 'FACILITY', nullable: true, length: 400 })
  facility: string | null;

  @Column('varchar2', { name: 'EDRPOU', nullable: true, length: 40 })
  edrpou: string | null;

  @Column('varchar2', { name: 'APARTMENT', nullable: true, length: 40 })
  apartment: string | null;

  @Column('varchar2', { name: 'HOUSE', nullable: true, length: 40 })
  house: string | null;

  @Column('varchar2', { name: 'STREET', nullable: true, length: 140 })
  street: string | null;

  @Column('varchar2', { name: 'STREET_TYPE', nullable: true, length: 40 })
  streetType: string | null;

  @Column('varchar2', { name: 'SETTLEMENT', nullable: true, length: 140 })
  settlement: string | null;

  @Column('varchar2', { name: 'SETTLEMENT_TYPE', nullable: true, length: 40 })
  settlementType: string | null;

  @Column('varchar2', { name: 'DISTRICT', nullable: true, length: 160 })
  district: string | null;

  @Column('varchar2', { name: 'REGION', nullable: true, length: 160 })
  region: string | null;

  @Column('varchar2', { name: 'COUNTRY', nullable: true, length: 40 })
  country: string | null;

  @Column('varchar2', { name: 'ADDRESS_TYPE', nullable: true, length: 8 })
  addressType: string | null;

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

  @Column('char', { name: 'NOT_RELIABLE', length: 1, default: () => "'N'" })
  notReliable: string;

  @ManyToOne(() => Ers, (Ers) => Ers.Addresses)
  @JoinColumn([{ name: 'ERS_ID', referencedColumnName: 'id' }])
  Ers: Ers;
}
