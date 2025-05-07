'use client';

import { useRouter } from 'next/navigation';
import { users } from '@/data/users';
import { useTaskStore } from '@/store/taskStore';

export default function Home() {
  const router = useRouter();
  const setCurrentUser = useTaskStore((state) => state.setCurrentUser);

  const handleUserSelect = (userId: string) => {
    setCurrentUser(userId);
    router.push('/tasks');
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-akkodis-navy mb-6">Welcome to Team Task Manager</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Select your account</h3>
        <div className="space-y-4">
          {users.map((user) => (
            <button
              key={user.id}
              onClick={() => handleUserSelect(user.id)}
              className="w-full p-4 text-left border rounded-lg hover:border-akkodis-cyan hover:bg-akkodis-gray transition-colors"
            >
              <div className="font-medium text-akkodis-navy">{user.name}</div>
              <div className="text-sm text-gray-600">{user.email}</div>
              <div className="text-xs text-akkodis-cyan mt-1">{user.role}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 