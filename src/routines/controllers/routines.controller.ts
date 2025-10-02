import { Controller } from '@nestjs/common';
import { RoutinesService } from '../services/routines.service';

/**
 * Controlador de Rutinas Semanales
 *
 * Maneja todas las rutas HTTP relacionadas con rutinas semanales:
 * - POST /routines - Crear rutina semanal
 * - GET /routines/:id - Obtener rutina por id
 * - GET /routines - Listar rutinas
 * - PUT /routines/:id - Actualizar rutina
 * - DELETE /routines/:id - Eliminar rutina
 * - PATCH /routines/:id/complete - Marcar rutina como completada
 * - POST /routines/:routineId/exercises - Agregar ejercicio a rutina
 * - DELETE /routines/:routineId/exercises/:exerciseId - Eliminar ejercicio de rutina
 */
@Controller('routines')
export class RoutinesController {
  constructor(private readonly routinesService: RoutinesService) {}

  // TODO: Implementar endpoints
  // - create(@Body() createRoutineDto: CreateRoutineDto): Promise<WeeklyRoutine>
  // - findAll(): Promise<WeeklyRoutine[]>
  // - findOne(@Param('id') id: string): Promise<WeeklyRoutine>
  // - update(@Param('id') id: string, @Body() updateRoutineDto: UpdateRoutineDto): Promise<WeeklyRoutine>
  // - remove(@Param('id') id: string): Promise<void>
  // - complete(@Param('id') id: string, @Body() completeRoutineDto: CompleteRoutineDto): Promise<WeeklyRoutine>
  // - addExercise(@Param('routineId') routineId: string, @Body() addExerciseDto: AddExerciseToRoutineDto): Promise<WeeklyRoutine>
  // - removeExercise(@Param('routineId') routineId: string, @Param('exerciseId') exerciseId: string): Promise<WeeklyRoutine>
}
