import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '../generated/prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(userCreateInput: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: userCreateInput });
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({ where: userWhereUniqueInput });
  }

  update(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    userUpdateInput: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.prisma.user.update({
      where: userWhereUniqueInput,
      data: userUpdateInput,
    });
  }

  remove(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where: userWhereUniqueInput });
  }
}
