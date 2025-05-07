export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
}

export const users: User[] = [
  {
    id: 'admin',
    name: 'Admin User',
    email: 'admin@akkodis.com',
    role: 'admin',
  },
  {
    id: 'user1',
    name: 'John Doe',
    email: 'john@akkodis.com',
    role: 'member',
  },
  {
    id: 'user2',
    name: 'Jane Smith',
    email: 'jane@akkodis.com',
    role: 'member',
  },
]; 