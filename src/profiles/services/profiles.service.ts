import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';
// import { CreateProfileDto, UpdateProfileDto } from '../dto/create-profile.dto';

/**
 * Servicio de Perfiles
 *
 * Maneja toda la lógica de negocio relacionada con perfiles:
 * - Crear perfiles
 * - Obtener perfiles
 * - Actualizar perfiles
 * - Eliminar perfiles
 * - Gestión de objetivos y niveles de actividad
 */
@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  // TODO: Implementar métodos CRUD
  // - create(createProfileDto: CreateProfileDto): Promise<Profile>
  // - findOne(userId: number): Promise<Profile>
  // - update(userId: number, updateProfileDto: UpdateProfileDto): Promise<Profile>
  // - remove(userId: number): Promise<void>
}
