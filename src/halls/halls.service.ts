import { Injectable } from '@nestjs/common';
import { Hall, Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HallsService {
  constructor(private prisma: PrismaService) {}

  create(hallCreateInput: Prisma.HallCreateInput): Promise<Hall> {
    return this.prisma.hall.create({ data: hallCreateInput });
  }

  findAll(): Promise<Hall[]> {
    return this.prisma.hall.findMany();
  }

  findOne(
    hallWhereUniqueInput: Prisma.HallWhereUniqueInput,
  ): Promise<Hall | null> {
    return this.prisma.hall.findUnique({ where: hallWhereUniqueInput });
  }

  update(
    hallWhereUniqueInput: Prisma.HallWhereUniqueInput,
    hallUpdateInput: Prisma.HallUpdateInput,
  ): Promise<Hall> {
    return this.prisma.hall.update({
      where: hallWhereUniqueInput,
      data: hallUpdateInput,
    });
  }

  remove(hallWhereUniqueInput: Prisma.HallWhereUniqueInput): Promise<Hall> {
    return this.prisma.hall.delete({ where: hallWhereUniqueInput });
  }
}
