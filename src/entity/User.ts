import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ers } from './Ers';
import { Signer } from './Signer';

@Index('USER_PK', ['id'], { unique: true })
@Index('USER_REGION_IDX', ['region'], {})
// @Index('USER_USERNAME_UNIQ', ['username'], { unique: true })
@Entity('W_USER')
export class User {
  @Column('char', { name: 'LOCKED', length: 1, default: () => "'N'" })
  locked: string;

  @Column('varchar2', { name: 'ROLE', length: 200 })
  role: string;

  @Column('clob', { name: 'CONF', default: () => 'JSON_OBJECT()' })
  conf: string;

  @Column('varchar2', { name: 'BADGE', nullable: true, length: 100 })
  badge: string | null;

  @Column('varchar2', { name: 'PHONE', nullable: true, length: 400 })
  phone: string | null;

  @Column('varchar2', { name: 'POSITION', nullable: true, length: 2000 })
  position: string | null;

  @Column('varchar2', { name: 'RANK', nullable: true, length: 8 })
  rank: string | null;

  @Column('varchar2', { name: 'SERVICE', nullable: true, length: 8 })
  service: string | null;

  @Column('varchar2', { name: 'UNIT', length: 40 })
  unit: string;

  @Column('varchar2', { name: 'REGION', length: 40 })
  region: string;

  @Column('varchar2', { name: 'USERNAME', unique: true, length: 120 })
  username: string;

  @Column('date', { name: 'DELETE_DATE', nullable: true })
  deleteDate: Date | null;

  @Column('varchar2', { name: 'DELETE_USERNAME', nullable: true, length: 120 })
  deleteUsername: string | null;

  @Column('date', { name: 'UPDATE_DATE', nullable: true })
  updateDate: Date | null;

  @Column('varchar2', { name: 'UPDATE_USERNAME', nullable: true, length: 120 })
  updateUsername: string | null;

  @Column('date', { name: 'INSERT_DATE', default: () => 'SYSDATE' })
  insertDate: Date;

  @Column('varchar2', {
    name: 'INSERT_USERNAME',
    length: 120,
    default: () => "'ERS'",
  })
  insertUsername: string;

  @PrimaryGeneratedColumn({ type: 'number', name: 'ID' })
  id: number;

  @Column('date', { name: 'LAST_SESSION_DATE', nullable: true })
  lastSessionDate: Date | null;

  @Column('varchar2', { name: 'LAST_SESSION_IP', nullable: true, length: 200 })
  lastSessionIp: string | null;

  @Column('clob', { name: 'SIGNATURE_STAMP', nullable: true })
  signatureStamp: string | null;

  @Column('clob', { name: 'EDS', nullable: true })
  eds: string | null;

  @Column('varchar2', { name: 'SIGN_OFFICER', nullable: true, length: 4000 })
  signOfficer: string | null;

  @Column('varchar2', { name: 'LASTNAME', nullable: true, length: 400 })
  lastname: string | null;

  @Column('varchar2', { name: 'MIDDLENAME', nullable: true, length: 400 })
  middlename: string | null;

  @Column('varchar2', { name: 'FIRSTNAME', nullable: true, length: 400 })
  firstname: string | null;

  @OneToMany(() => Ers, (Ers) => Ers.User)
  Ers: Ers[];

  @OneToMany(() => Signer, (Signer) => Signer.Username)
  Signers: Signer[];
}
