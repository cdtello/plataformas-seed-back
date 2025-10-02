import { Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Column } from 'typeorm';

/**
 * Enum para los objetivos del usuario
 */
export enum Goal {
  LOSE_WEIGHT = 'LOSE_WEIGHT',
  GAIN_MUSCLE = 'GAIN_MUSCLE',
  MAINTAIN = 'MAINTAIN',
}

/**
 * Enum para el nivel de actividad física
 */
export enum ActivityLevel {
  SEDENTARY = 'SEDENTARY',
  LIGHT = 'LIGHT',
  MODERATE = 'MODERATE',
  ACTIVE = 'ACTIVE',
  VERY_ACTIVE = 'VERY_ACTIVE',
}

/**
 * Entidad Profile - Almacena información específica sobre los objetivos y nivel de actividad del usuario
 *
 * Relaciones:
 * - 1:1 con User (un perfil pertenece a un único usuario)
 */
@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: Implementar columnas
  // - @Column({ type: 'enum', enum: Goal, default: Goal.MAINTAIN }) goal: Goal;
  // - @Column({ type: 'enum', enum: ActivityLevel, default: ActivityLevel.MODERATE }) activityLevel: ActivityLevel;
  // - @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) createdAt: Date;
  // - @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) updatedAt: Date;

  // TODO: Implementar relaciones
  // - @OneToOne(() => User, (user) => user.profile, { onDelete: 'CASCADE' })
  // - @JoinColumn()
}
