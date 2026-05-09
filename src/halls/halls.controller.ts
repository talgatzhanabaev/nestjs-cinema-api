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

@Controller('halls')
export class HallsController {
  constructor(private readonly hallsService: HallsService) {}

  @Post()
  create(@Body() createHallDto: CreateHallDto): Promise<Hall> {
    return this.hallsService.create(createHallDto);
  }

  @Get()
  findAll(): Promise<Hall[]> {
    return this.hallsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Hall | null> {
    return this.hallsService.findOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHallDto: UpdateHallDto,
  ): Promise<Hall> {
    return this.hallsService.update({ id }, updateHallDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<Hall> {
    return this.hallsService.remove({ id });
  }
}
