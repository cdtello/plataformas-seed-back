import { Controller } from '@nestjs/common';
import { ExercisesService } from '../services/exercises.service';

/**
 * Controlador de Ejercicios
 *
 * Maneja todas las rutas HTTP relacionadas con ejercicios:
 * - POST /exercises - Crear ejercicio
 * - GET /exercises - Listar ejercicios disponibles
 * - GET /exercises/:id - Obtener ejercicio
 * - PUT /exercises/:id - Actualizar ejercicio
 * - DELETE /exercises/:id - Eliminar ejercicio
 */
@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  // TODO: Implementar endpoints
  // - create(@Body() createExerciseDto: CreateExerciseDto): Promise<Exercise>
  // - findAll(): Promise<Exercise[]>
  // - findOne(@Param('id') id: string): Promise<Exercise>
  // - update(@Param('id') id: string, @Body() updateExerciseDto: UpdateExerciseDto): Promise<Exercise>
  // - remove(@Param('id') id: string): Promise<void>
}
