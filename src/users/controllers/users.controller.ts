import { Controller } from '@nestjs/common';
import { UsersService } from '../services/users.service';

/**
 * Controlador de Usuarios
 *
 * Maneja todas las rutas HTTP relacionadas con usuarios:
 * - POST /users - Crear usuario
 * - GET /users - Obtener lista de usuarios
 * - GET /users/:id - Obtener usuario por id
 * - PUT /users/:id - Actualizar usuario
 * - DELETE /users/:id - Eliminar usuario
 * - GET /users/:id/routines - Obtener rutinas del usuario
 */
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // TODO: Implementar endpoints
  // - create(@Body() createUserDto: CreateUserDto): Promise<User>
  // - findAll(): Promise<User[]>
  // - findOne(@Param('id') id: string): Promise<User>
  // - update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User>
  // - remove(@Param('id') id: string): Promise<void>
  // - findUserRoutines(@Param('id') id: string): Promise<WeeklyRoutine[]>
}
