import { Person } from '@types';

export const generatePerson = (name: string, email: string): Person => ({
  name,
  email,
});
