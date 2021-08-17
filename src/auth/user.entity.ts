import { Task } from './../tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  name?: string;

  @Column()
  role: Role;

  @Column()
  avatar?: string;

  @Column()
  creationDate: string;

  @Column()
  isActive: boolean;

  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
