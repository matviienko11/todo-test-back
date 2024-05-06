import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Todo extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  text: string;

  @Column({ type: DataType.DATE })
  due_to: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isDone: boolean;
}
