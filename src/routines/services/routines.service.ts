import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeeklyRoutine } from '../entities/weekly-routine.entity';
// import {
//   CreateRoutineDto,
//   UpdateRoutineDto,
//   CompleteRoutineDto,
//   AddExerciseToRoutineDto,
// } from '../dto/create-routine.dto';

/**
 * Servicio de Rutinas Semanales
 *
 * Maneja toda la lógica de negocio relacionada con rutinas semanales:
 * - Crear rutinas
 * - Obtener rutinas
 * - Actualizar rutinas
 * - Eliminar rutinas
 * - Marcar como completadas
 * - Gestión de ejercicios en rutinas
 */
@Injectable()
export class RoutinesService {
  constructor(
    @InjectRepository(WeeklyRoutine)
    private readonly routineRepository: Repository<WeeklyRoutine>,
  ) {}

  // TODO: Implementar métodos CRUD
  // - create(createRoutineDto: CreateRoutineDto): Promise<WeeklyRoutine>
  // - findAll(): Promise<WeeklyRoutine[]>
  // - findOne(id: number): Promise<WeeklyRoutine>
  // - update(id: number, updateRoutineDto: UpdateRoutineDto): Promise<WeeklyRoutine>
  // - remove(id: number): Promise<void>
  // - complete(id: number, completeRoutineDto: CompleteRoutineDto): Promise<WeeklyRoutine>
  // - addExercise(routineId: number, addExerciseDto: AddExerciseToRoutineDto): Promise<WeeklyRoutine>
  // - removeExercise(routineId: number, exerciseId: number): Promise<WeeklyRoutine>
}
