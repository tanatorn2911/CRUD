import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"; //สร้างtable

@Entity("user") //ประกาศ
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}