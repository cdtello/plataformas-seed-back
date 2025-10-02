import { Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Column } from 'typeorm';

/**
 * Enum para los días de la semana
 */
export enum DayOfWeek {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}

/**
 * Entidad WeeklyRoutine - Representa una rutina de ejercicios planificada para un día específico de la semana
 *
 * Relaciones:
 * - N:1 con User (muchas rutinas pertenecen a un usuario)
 * - N:M con Exercise (una rutina puede contener múltiples ejercicios)
 */
@Entity('weekly_routines')
export class WeeklyRoutine {
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: Implementar columnas
  // - @Column({ type: 'enum', enum: DayOfWeek }) dayOfWeek: DayOfWeek;
  // - @Column({ type: 'boolean', default: false }) completed: boolean;
  // - @Column({ type: 'text', nullable: true }) notes: string;
  // - @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) createdAt: Date;
  // - @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) updatedAt: Date;

  // TODO: Implementar relaciones
  // - @ManyToOne(() => User, (user) => user.weeklyRoutines, { onDelete: 'CASCADE' })
  // - @JoinColumn()
  // - @ManyToMany(() => Exercise, (exercise) => exercise.weeklyRoutines)
  // - @JoinTable({ name: 'weekly_routine_exercises', ... })
}
