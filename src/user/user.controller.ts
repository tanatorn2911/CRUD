import { Controller,Res,HttpStatus,Get,Param,Post ,Body,Put,Delete} from "@nestjs/common"; //ไฟล์ทำหน้าที่บกบอกAPIผ่านpathไหนได้บ้าง
import {  UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { Response } from "express";
import { CreateUserDto } from "src/user/dto/create-user.dto";


@Controller('user')
export class UserController{
    constructor(private UserService: UserService){

    }

    @Get()
    async findAll() {
        const response = await this.UserService.findAll();
        return response;
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        const response = await this.UserService.findOne(id);
        return response
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const response = await this.UserService.create(createUserDto);
        return response;
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() createUserDto: UserEntity) {
        const response = await this.UserService.update(id, createUserDto);
        return response;
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        const response = await this.UserService.remove(id);
        return response
    }
}