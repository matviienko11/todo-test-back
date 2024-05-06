import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
	constructor(
		@Inject('TODOS_REPOSITORY')
		private todosRepository: typeof Todo,
	) {}

	async findAll(): Promise<Todo[]> {
		return await this.todosRepository.findAll<Todo>();
	}

	async create(body: CreateTodoDto): Promise<Todo> {
		return await this.todosRepository.create<Todo>({
			id: uuidv4(),
			...body,
		});
	}

	async findOne(id: string): Promise<Todo> {
		return await this.todosRepository.findOne<Todo>({
			where: {
				id,
			},
		});
	}

	async update(todo: any) {
		return await this.todosRepository.update(todo, { where: { id: todo.id } });
	}

	async delete(id: string): Promise<number> {
		return await this.todosRepository.destroy<any>({
			where: {
				id,
			},
		});
	}
}
