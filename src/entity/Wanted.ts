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
import { Case } from './Case';

// @Index('W_WANTED_CASE_ID_UNIQ', ['SYS_NC00012$'], { unique: true })
@Index('W_WANTED_PK', ['id'], { unique: true })
@Entity('W_WANTED')
export class Wanted {
  @Column('varchar2', {
    name: 'WANTED_OFFICER_FULLNAME',
    nullable: true,
    length: 200,
  })
  wantedOfficerFullname: string | null;

  @Column('varchar2', { name: 'WANTED_UNIT', nullable: true, length: 600 })
  wantedUnit: string | null;

  @Column('varchar2', { name: 'INSERT_USERNAME', nullable: true, length: 80 })
  insertUsername: string | null;

  @Column('varchar2', { name: 'DELETE_USERNAME', nullable: true, length: 80 })
  deleteUsername: string | null;

  @Column('varchar2', { name: 'UPDATE_USERNAME', nullable: true, length: 80 })
  updateUsername: string | null;

  @Column('date', { name: 'WANTED_DATE', nullable: true })
  wantedDate: Date | null;

  @Column('date', { name: 'DELETE_DATE', nullable: true })
  deleteDate: Date | null;

  @Column('date', { name: 'UPDATE_DATE', nullable: true })
  updateDate: Date | null;

  @Column('date', { name: 'INSERT_DATE', nullable: true })
  insertDate: Date | null;

  @PrimaryGeneratedColumn({ type: 'number', name: 'ID' })
  id: number;

  @OneToMany(() => Material, (Material) => Material.Wanted)
  Materials: Material[];

  @ManyToOne(() => Case, (Case) => Case.Wanteds)
  @JoinColumn([{ name: 'CASE_ID', referencedColumnName: 'id' }])
  Case: Case;
}
