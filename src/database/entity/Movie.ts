import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'text', array: true })
  actors: string[];

  @Column({ nullable: true, name: 'released_year' })
  releaseYear: string;

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @UpdateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
