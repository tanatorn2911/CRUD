import { Controller,Res,HttpStatus,Get,Param,Post ,Body,Put,Delete} from "@nestjs/common";
import {  UserService } from "./user.service";
import { UserEntity } from "./user.entity";

@Controller('user')
export class UserController{
    constructor(private UserService: UserService){

    }

    @Get()
    async findAll(@Res() res: Response){
        const response = await this.UserService.findAll();
        return response;
       // res.status(HttpStatus.OK).json({payload: response});
    }
    @Get(":id")
    async findOne(@Param() id: number,@Res() res: Response) {
        const response= await this.UserService.findOne(id);
        return response;
    }
    @Post()
    async create(@Body()createUserDto: UserEntity){
        console.log('createUserDto',createUserDto)
        const response = await this.UserService.create(createUserDto);
        return response;
    }
    @Put(":id")
    async update(@Param()id:number,@Body() createUserDto:UserEntity,@Res()res: Response){
        const response = await this.UserService.update(id,createUserDto);
        return response;
    }

    @Delete()
    async delete(@Body()id:number,@Res()res:Response){
        const response = await this.UserService.remove(id);
        return response;
    }

}