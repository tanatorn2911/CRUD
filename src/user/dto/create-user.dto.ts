import { ApiProperty } from "@nestjs/swagger";
import { IsNumber,IsString } from 'class-validator'

export class CreateUserDto{
    @ApiProperty()
    @IsNumber()
    readonly id:number

    @ApiProperty()
    @IsString()
    readonly firstName:string

    @ApiProperty()
    @IsString()
    readonly lastName:string
    
}