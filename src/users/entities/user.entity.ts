import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  name: string;

  @Column({ length: 128 })
  lastName: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 32 })
  role: string;

  @Column({ nullable: true, length: 128 })
  address?: string;

  @Column({ nullable: true, length: 255 })
  city?: string;

  @Column({ nullable: true, length: 32 })
  country?: string;

  @Column({ nullable: true, length: 5 })
  countryCode?: string;

  @Column({ nullable: true, length: 5 })
  phoneCountryCode?: string;

  @Column({ nullable: true, length: 32 })
  phoneNumber?: string;

  @Column({ nullable: true, length: 255 })
  googleUrl?: string;

  @Column({ nullable: true, length: 255 })
  facebookUrl?: string;

  @Column({ nullable: true, length: 255 })
  twitterUrl?: string;

  @Column({ nullable: true, length: 255 })
  githubUrl?: string;
  
  @Column({ nullable: true, length: 255 })
  linkedinUrl?: string;

  @Column({ nullable: true, length: 255 })
  instagramUrl?: string;

  @Column({ nullable: true, length: 255 })
  websiteUrl?: string;

  @Column({ nullable: true, length: 255 })
  youtubeUrl?: string;

  @Column({ nullable: true, type: "text" })
  bio?: string;

  @Column({ nullable: true, length: 255 })
  profilePicture?: string;

  @Column({ nullable: true, length: 32 })
  nickName?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;
}
