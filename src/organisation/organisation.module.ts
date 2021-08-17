import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { OrganisationController } from './organisation.controller';
import { OrganisationsRepository } from './organisations.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrganisationsRepository])],
  providers: [OrganisationService],
  controllers: [OrganisationController],
})
export class OrganisationModule {}
