import { AuthModule } from './../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { OrganisationController } from './organisation.controller';
import { OrganisationsRepository } from './organisations.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrganisationsRepository]), AuthModule],
  providers: [OrganisationService],
  controllers: [OrganisationController],
})
export class OrganisationModule {}
