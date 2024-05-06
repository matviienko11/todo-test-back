import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Todo } from 'src/todos/entities/todo.entity';

export const databaseProviders = [
	{
		provide: 'SEQUELIZE',
		useFactory: async () => {
			const sequelize = new Sequelize({
				dialect: process.env.DB_DIALECT as Dialect,
				host: process.env.DB_HOST,
				port: Number(process.env.DB_PORT),
				username: process.env.DB_USERNAME,
				password: process.env.DB_PASSWORD,
				database: process.env.DB_NAME,
			});
			sequelize.addModels([Todo]);
			await sequelize.sync();
			return sequelize;
		},
	},
];
