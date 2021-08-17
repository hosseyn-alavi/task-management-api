import { User } from 'src/auth/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Organisation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  website: string;

  @Column()
  logo: string;

  @OneToMany((_type) => User, (user) => user.organisation, { eager: true })
  users?: User[];
}
