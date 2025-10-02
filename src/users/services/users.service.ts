import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
// import { CreateUserDto, UpdateUserDto } from '../dto/create-user.dto';

/**
 * Servicio de Usuarios
 *
 * Maneja toda la lógica de negocio relacionada con usuarios:
 * - Crear usuarios
 * - Obtener usuarios
 * - Actualizar usuarios
 * - Eliminar usuarios
 * - Gestión de relaciones
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // TODO: Implementar métodos CRUD
  // - create(createUserDto: CreateUserDto): Promise<User>
  // - findAll(): Promise<User[]>
  // - findOne(id: number): Promise<User>
  // - update(id: number, updateUserDto: UpdateUserDto): Promise<User>
  // - remove(id: number): Promise<void>
  // - findUserRoutines(id: number): Promise<WeeklyRoutine[]>
}
