import { createConnection } from 'typeorm';

const intializeDB = async (): Promise<void> => {
  try {
    await createConnection();
    console.log('Database successfully initialized');
  } catch (error) {
    console.log(`Database failed to connect ${error.message}`);
  }
};

export default intializeDB;
