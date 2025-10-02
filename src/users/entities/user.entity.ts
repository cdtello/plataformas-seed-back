import { Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { Column } from 'typeorm';

/**
 * Entidad User - Representa a cada usuario registrado en la aplicación
 *
 * Relaciones:
 * - 1:1 con Profile (un usuario tiene un único perfil)
 * - 1:N con WeeklyRoutine (un usuario puede tener múltiples rutinas semanales)
 */
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: Implementar columnas
  // - @Column({ type: 'varchar', length: 100 }) name: string;
  // - @Column({ type: 'varchar', length: 255, unique: true }) email: string;
  // - @Column({ type: 'varchar', length: 255 }) password: string;
  // - @Column({ type: 'int' }) age: number;
  // - @Column({ type: 'decimal', precision: 5, scale: 2 }) weight: number;
  // - @Column({ type: 'int' }) height: number;
  // - @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) createdAt: Date;
  // - @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }) updatedAt: Date;

  // TODO: Implementar relaciones
  // - @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  // - @OneToMany(() => WeeklyRoutine, (weeklyRoutine) => weeklyRoutine.user, { cascade: true })
}
