import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Check } from './Check';
import { Clothing } from './Clothing';
import { Dental } from './Dental';
import { Desease } from './Desease';
import { Document } from './Document';
import { Feature } from './Feature';
import { Fingerprint } from './Fingerprint';
import { InternetResource } from './InternetResource';
import { Material } from './Material';
import { Phone } from './Phone';
import { Photo } from './Photo';
import { PrimaryMaterial } from './PrimaryMaterial';
import { Signer } from './Signer';
import { Thing } from './Thing';

// @Index('W_UPLOAD_CHECK_ID_UNIQ', ['SYS_NC00025$'], { unique: true })
// @Index('W_UPLOAD_PHOTO_ID_UNIQ', ['SYS_NC00017$'], { unique: true })
@Index('W_UPLOAD_PK', ['id'], { unique: true })
// @Index('W_UPLOAD_SIGNER_ID_UNIQ', ['SYS_NC00022$'], { unique: true })
@Entity('W_UPLOAD')
export class Upload {
  @Column('varchar2', { name: 'FILE_NAME', length: 1024 })
  fileName: string;

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

  @ManyToOne(() => Check, (Check) => Check.Uploads)
  @JoinColumn([{ name: 'CHECK_ID', referencedColumnName: 'id' }])
  Check: Check;

  @ManyToOne(() => Clothing, (Clothing) => Clothing.Uploads)
  @JoinColumn([{ name: 'CLOTHING_ID', referencedColumnName: 'id' }])
  Clothing: Clothing;

  @ManyToOne(() => Dental, (Dental) => Dental.Uploads)
  @JoinColumn([{ name: 'DENTAL_ID', referencedColumnName: 'id' }])
  Dental: Dental;

  @ManyToOne(() => Desease, (Desease) => Desease.Uploads)
  @JoinColumn([{ name: 'DESEASE_ID', referencedColumnName: 'id' }])
  Desease: Desease;

  @ManyToOne(() => Document, (Document) => Document.Uploads)
  @JoinColumn([{ name: 'DOCUMENT_ID', referencedColumnName: 'id' }])
  Document: Document;

  @ManyToOne(() => Feature, (Feature) => Feature.Uploads)
  @JoinColumn([{ name: 'FEATURE_ID', referencedColumnName: 'id' }])
  Feature: Feature;

  @ManyToOne(() => Fingerprint, (Fingerprint) => Fingerprint.Uploads)
  @JoinColumn([{ name: 'FINGERPRINT_ID', referencedColumnName: 'id' }])
  Fingerprint: Fingerprint;

  @ManyToOne(
    () => InternetResource,
    (InternetResource) => InternetResource.Uploads,
  )
  @JoinColumn([{ name: 'INTERNET_RESOURCE_ID', referencedColumnName: 'id' }])
  InternetResource: InternetResource;

  @ManyToOne(() => Material, (Material) => Material.Uploads, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'MATERIAL_ID', referencedColumnName: 'id' }])
  Material: Material;

  @ManyToOne(() => Phone, (Phone) => Phone.Uploads)
  @JoinColumn([{ name: 'PHONE_ID', referencedColumnName: 'id' }])
  Phone: Phone;

  @ManyToOne(() => Photo, (Photo) => Photo.Uploads)
  @JoinColumn([{ name: 'PHOTO_ID', referencedColumnName: 'id' }])
  Photo: Photo;

  @ManyToOne(
    () => PrimaryMaterial,
    (PrimaryMaterial) => PrimaryMaterial.Uploads,
  )
  @JoinColumn([{ name: 'PRIMARY_MATERIAL_ID', referencedColumnName: 'id' }])
  PrimaryMaterial: PrimaryMaterial;

  @ManyToOne(() => Signer, (Signer) => Signer.Uploads, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'SIGNER_ID', referencedColumnName: 'id' }])
  Signer: Signer;

  @ManyToOne(() => Thing, (Thing) => Thing.Uploads)
  @JoinColumn([{ name: 'THING_ID', referencedColumnName: 'id' }])
  Thing: Thing;
}
