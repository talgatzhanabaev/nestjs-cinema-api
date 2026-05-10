import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { UsersModule } from '../users/users.module';
import { HallsModule } from '../halls/halls.module';

@Module({
  imports: [UsersModule, HallsModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
