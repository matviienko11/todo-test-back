import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { todosProviders } from './providers/todo.providers';
import { TodosController } from './todo.controller';
import { TodosService } from './todo.service';

@Module({
	imports: [DatabaseModule],
	controllers: [TodosController],
	providers: [TodosService, ...todosProviders],
})
export class TodoModule {}
