import { Exclude } from 'class-transformer';
import { Task } from './../tasks/task.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Organisation } from 'src/organisation/organisation.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  name?: string;

  @Column()
  role: Role;

  @Column({ nullable: true })
  avatar?: string;

  @Column()
  creationDate: string;

  @Column()
  isActive: boolean;

  @ManyToOne((_type) => Organisation, (organisation) => organisation.users, {
    eager: false,
  })
  @Exclude({ toPlainOnly: true })
  organisation?: Organisation;

  @OneToMany((_type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
