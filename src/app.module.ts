import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { HallsModule } from './halls/halls.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HallsModule,
  ],
})
export class AppModule {}
