import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from '../generated/prisma/client';
import { UsersService } from '../users/users.service';
import { HallsService } from '../halls/halls.service';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('tickets')
export class TicketsController {
  constructor(
    private readonly ticketsService: TicketsService,
    private usersService: UsersService,
    private hallsService: HallsService,
  ) {}

  @Post()
  @Roles(Role.User)
  create(@Body() createTicketDto: CreateTicketDto): Promise<Ticket> {
    const { price, seat, movieId, movieTitle, startTime, userId, hallId } =
      createTicketDto;

    const user = this.usersService.findOne({ id: userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const hall = this.hallsService.findOne({ id: hallId });
    if (!hall) {
      throw new NotFoundException('Hall not found');
    }

    return this.ticketsService.create({
      price,
      seat,
      movieId,
      movieTitle,
      startTime,
      user: {
        connect: { id: userId },
      },
      hall: {
        connect: { id: hallId },
      },
    });
  }

  @Get()
  @Roles(Role.Admin)
  findAll(): Promise<Ticket[]> {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin)
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Ticket | null> {
    return this.ticketsService.findOne({ id });
  }

  @Patch(':id')
  @Roles(Role.Admin)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTicketDto: UpdateTicketDto,
  ): Promise<Ticket> {
    return this.ticketsService.update({ id }, updateTicketDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number): Promise<Ticket> {
    return this.ticketsService.remove({ id });
  }
}
