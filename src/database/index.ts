import { createConnection } from 'typeorm';

const intializeDB = async (): Promise<void> => {
  await createConnection();
  console.log('Database successfully initialized');
};

export default intializeDB;
