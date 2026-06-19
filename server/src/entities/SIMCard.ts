import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum SimStatus {
  PENDING = "pending",
  ACTIVE = "active",
  FAILED = "failed"
}

@Entity()
export class SIMCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 19, unique: true })
  iccid: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  phoneNumber: string | null;

  @Column({
    type: "enum",
    enum: SimStatus,
    default: SimStatus.PENDING
  })
  status: SimStatus;
}