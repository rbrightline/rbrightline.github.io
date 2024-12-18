import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Todo } from './entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller()
export class TodoController {
  constructor(
    @InjectRepository(Todo)
    protected readonly repo: Repository<Todo>
  ) {}

  @Post('todo/:todo')
  addTodo(
    @Query('todo') title: string,
    @Query('description') description: string
  ) {
    return this.repo.save({ title, description });
  }

  @Get('todo')
  async viewTodos() {
    const found = await this.repo.find();
    return found
      .map((e) => {
        return `
      <h1>${e.title}</h1>
      <p>${e.description}</p>
      `;
      })
      .join('<hr/>');
  }

  @Get('todos')
  todos() {
    return this.repo.find();
  }
}
