import { User } from 'src/auth/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Organisation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  logo: string;

  @OneToMany((_type) => User, (user) => user.organisation, { eager: true })
  users?: User[];
}
