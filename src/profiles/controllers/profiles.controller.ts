import { Controller } from '@nestjs/common';
import { ProfilesService } from '../services/profiles.service';

/**
 * Controlador de Perfiles
 *
 * Maneja todas las rutas HTTP relacionadas con perfiles:
 * - GET /profiles/:userId - Obtener perfil de un usuario
 * - PUT /profiles/:userId - Actualizar perfil
 */
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  // TODO: Implementar endpoints
  // - findOne(@Param('userId') userId: string): Promise<Profile>
  // - update(@Param('userId') userId: string, @Body() updateProfileDto: UpdateProfileDto): Promise<Profile>
}
