import { Controller,Res,HttpStatus,Get,Param,Post ,Body,Put,Delete} from "@nestjs/common";
import {  UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { Response } from "express";


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
    async findOne(@Param('id') id: number, @Res() res: Response) {
        const response = await this.UserService.findOne(id);
        return res.status(200).json(response);
    }

    @Post()
    async create(@Body() createUserDto: UserEntity) {
        const response = await this.UserService.create(createUserDto);
        return response;
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() createUserDto: UserEntity) {
        const response = await this.UserService.update(id, createUserDto);
        return response;
    }

    @Delete(':id')
    async delete(@Param('id') id: number, @Res() res: Response) {
        const response = await this.UserService.remove(id);
        return response;
    }
}