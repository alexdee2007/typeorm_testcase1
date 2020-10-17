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
import { User } from './User';
import { Upload } from './Upload';

@Index('W_SIGNER_PK', ['id'], { unique: true })
@Entity('W_SIGNER')
export class Signer {
  @Column('varchar2', { name: 'SIGN_TYPE', nullable: true, length: 4 })
  signType: string | null;

  @Column('date', { name: 'RESOLUTION_DATE', nullable: true })
  resolutionDate: Date | null;

  @Column('varchar2', { name: 'RESOLUTION_TYPE', nullable: true, length: 8 })
  resolutionType: string | null;

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

  @Column('varchar2', { name: 'SIGN_OFFICER', nullable: true, length: 4000 })
  signOfficer: string | null;

  @ManyToOne(() => Material, (Material) => Material.Signers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'MATERIAL_ID', referencedColumnName: 'id' }])
  Material: Material;

  @ManyToOne(() => User, (User) => User.Signers)
  @JoinColumn([{ name: 'USERNAME', referencedColumnName: 'username' }])
  Username: User;

  @OneToMany(() => Upload, (Upload) => Upload.Signer)
  Uploads: Upload[];
}
