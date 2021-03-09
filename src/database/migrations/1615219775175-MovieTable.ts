import { MigrationInterface, QueryRunner } from 'typeorm';

export class MovieTable1615219775175 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`CREATE TABLE IF NOT EXISTS movie
        (id SERIAL PRIMARY KEY, 
        title VARCHAR(100) NOT NULL,  
        description VARCHAR(250) NOT NULL,
        release_year VARCHAR(100) NULL,
        actors TEXT[],
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        created_at TIMESTAMP NOT NULL DEFAULT NOW())`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
