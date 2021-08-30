import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { OrganisationModule } from './organisation/organisation.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(),
    AuthModule,
    OrganisationModule,
  ],
  controllers: [],
})
export class AppModule {}
