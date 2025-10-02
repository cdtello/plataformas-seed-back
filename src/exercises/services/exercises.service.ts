import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from '../entities/exercise.entity';
// import {
//   CreateExerciseDto,
//   UpdateExerciseDto,
// } from '../dto/create-exercise.dto';

/**
 * Servicio de Ejercicios
 *
 * Maneja toda la lógica de negocio relacionada con ejercicios:
 * - Crear ejercicios
 * - Obtener ejercicios
 * - Actualizar ejercicios
 * - Eliminar ejercicios
 * - Gestión del catálogo
 */
@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private readonly exerciseRepository: Repository<Exercise>,
  ) {}

  // TODO: Implementar métodos CRUD
  // - create(createExerciseDto: CreateExerciseDto): Promise<Exercise>
  // - findAll(): Promise<Exercise[]>
  // - findOne(id: number): Promise<Exercise>
  // - update(id: number, updateExerciseDto: UpdateExerciseDto): Promise<Exercise>
  // - remove(id: number): Promise<void>
}
