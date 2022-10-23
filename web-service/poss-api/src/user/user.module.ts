import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { providers } from '../providers';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [...providers, UserService],
  exports: [UserService],
})
export class UserModule {}
