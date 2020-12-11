import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("tb_user")
export default class User {
  @PrimaryGeneratedColumn("increment")
  cd_id: number;

  @Column()
  nm_user: string;

  @Column()
  nm_email: string;

  @Column()
  ds_password: string;
}
