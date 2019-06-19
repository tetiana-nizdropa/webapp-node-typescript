import { Table, Column, Model, HasMany, PrimaryKey } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id: number;
  @Column
  email: string;
  @Column
  first_name: string;
  @Column
  last_name: string;
  @Column
  avatar: string;
  @Column
  page: number;
}