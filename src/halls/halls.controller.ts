import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { HallsService } from './halls.service';
import { CreateHallDto } from './dto/create-hall.dto';
import { UpdateHallDto } from './dto/update-hall.dto';
import { Hall } from '../generated/prisma/client';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';

@Controller('halls')
export class HallsController {
  constructor(private readonly hallsService: HallsService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createHallDto: CreateHallDto): Promise<Hall> {
    return this.hallsService.create(createHallDto);
  }

  @Get()
  @Roles(Role.Admin)
  findAll(): Promise<Hall[]> {
    return this.hallsService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin)
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Hall | null> {
    return this.hallsService.findOne({ id });
  }

  @Patch(':id')
  @Roles(Role.Admin)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHallDto: UpdateHallDto,
  ): Promise<Hall> {
    return this.hallsService.update({ id }, updateHallDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number): Promise<Hall> {
    return this.hallsService.remove({ id });
  }
}
