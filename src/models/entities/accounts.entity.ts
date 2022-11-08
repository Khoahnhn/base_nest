import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ERole } from '@/utils/enum';

@Entity({ name: 'accounts' })
export class Accounts extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  @ApiProperty({
    required: true,
    type: 'number',
    example: 1,
  })
  id: number;

  @Column({ name: 'wallet_address', unique: true, nullable: false })
  @IsString()
  @ApiProperty({
    required: true,
    type: 'string',
    example: '0x54f34EEEd4F4E852ad2B10429c173899C61b21F5',
  })
  walletAddress: string;

  @Column({
    name: 'name',
    default: '',
  })
  @ApiProperty({
    required: true,
    type: 'string',
    example: 'admin name',
  })
  @IsString()
  name: string;

  @Column({
    name: 'email',
    default: '',
    nullable: false,
  })
  @ApiProperty({
    required: false,
    type: 'string',
    example: 'admin name',
  })
  @IsString()
  email: string;

  @Column({
    name: 'phone_number',
    default: '',
    nullable: false,
  })
  @ApiProperty({
    required: false,
    type: 'string',
    example: 'admin name',
  })
  @IsString()
  phoneNumber: string;

  @Column({
    name: 'role',
    type: 'enum',
    enum: ERole,
    default: ERole.USER,
    nullable: false,
  })
  @ApiProperty({
    type: 'enum',
    example: ERole.USER,
    required: false,
    enum: ERole,
  })
  @IsOptional()
  role: ERole;

  @Column({ name: 'register_at', type: 'timestamp', nullable: true })
  registerAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @Exclude()
  updatedAt: Date;
}
