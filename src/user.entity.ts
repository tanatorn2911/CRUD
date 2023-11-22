import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user') //ประกาศ
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}