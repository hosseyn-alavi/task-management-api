import { OrganisationsRepository } from './organisations.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrganisationService {
  constructor(
    @InjectRepository(OrganisationsRepository)
    private organisationsRepository: OrganisationsRepository,
  ) {}
}
