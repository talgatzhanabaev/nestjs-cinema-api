import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Ticket } from '../generated/prisma/client';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  create(ticketCreateInput: Prisma.TicketCreateInput): Promise<Ticket> {
    return this.prisma.ticket.create({ data: ticketCreateInput });
  }

  findAll(): Promise<Ticket[]> {
    return this.prisma.ticket.findMany();
  }

  findOne(
    ticketWhereUniqueInput: Prisma.TicketWhereUniqueInput,
  ): Promise<Ticket | null> {
    return this.prisma.ticket.findUnique({ where: ticketWhereUniqueInput });
  }

  update(
    ticketWhereUniqueInput: Prisma.TicketWhereUniqueInput,
    ticketUpdateInput: Prisma.TicketUpdateInput,
  ): Promise<Ticket> {
    return this.prisma.ticket.update({
      where: ticketWhereUniqueInput,
      data: ticketUpdateInput,
    });
  }

  remove(
    ticketWhereUniqueInput: Prisma.TicketWhereUniqueInput,
  ): Promise<Ticket> {
    return this.prisma.ticket.delete({ where: ticketWhereUniqueInput });
  }
}
