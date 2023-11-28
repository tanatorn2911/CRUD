import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { UserModel } from './user/user.module';
// import { employeeModel } from './employee/employee.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username: 'postgres',
    password:'admin1234',
    database:'nestjs',
    autoLoadEntities: true,
    synchronize:true,

  }),UserModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
