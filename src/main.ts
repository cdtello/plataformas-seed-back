import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ CONFIGURAR CORS
  app.enableCors({
    origin: '*', // permite cualquier dominio
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // ✅ CONFIGURAR VALIDACIONES GLOBALES
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Eliminar propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // Lanzar error si se envían propiedades extra
      transform: true, // Transformar automáticamente tipos (string → number)
    }),
  );

  await app.listen(process.env.PORT ?? 3001, '0.0.0.0');
}
bootstrap().catch((error) => console.error(error));
