import { Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Column } from 'typeorm';

/**
 * Entidad Exercise - Catálogo de ejercicios disponibles en la aplicación
 *
 * Relaciones:
 * - N:M con WeeklyRoutine (un ejercicio puede estar en múltiples rutinas)
 */
@Entity('exercises')
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: Implementar columnas
  // - @Column({ type: 'varchar', length: 100 }) name: string;
  // - @Column({ type: 'text' }) reps: string;
  // - @Column({ type: 'varchar', length: 500, nullable: true }) videoUrl: string;
  // - @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) createdAt: Date;
  // - @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) updatedAt: Date;

  // TODO: Implementar relaciones
  // - @ManyToMany(() => WeeklyRoutine, (weeklyRoutine) => weeklyRoutine.exercises)
}
