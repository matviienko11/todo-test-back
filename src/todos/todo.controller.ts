import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodosService } from './todo.service';

@Controller('todos')
export class TodosController {
  constructor(private _todosService: TodosService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this._todosService.findOne(id);
  }

  @Get()
  async getAll() {
    return await this._todosService.findAll();
  }

  @Post()
  async create(@Body() body: CreateTodoDto) {
    return await this._todosService.create(body);
  }

  @Put()
  async update(@Body() body: any) {
    return await this._todosService.update(body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this._todosService.delete(id);
  }
}
