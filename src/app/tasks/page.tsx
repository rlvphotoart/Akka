'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTaskStore, Task, TaskStatus } from '@/store/taskStore';
import { users } from '@/data/users';

export default function TasksPage() {
  const router = useRouter();
  const { currentUser, tasks, addTask, updateTaskStatus, deleteTask, getTasksByUser } = useTaskStore();
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assignedTo: '',
    status: 'In Progress' as TaskStatus,
  });

  if (!currentUser) {
    router.push('/');
    return null;
  }

  const currentUserData = users.find((u) => u.id === currentUser);
  const isAdmin = currentUserData?.role === 'admin';
  const userTasks = isAdmin ? tasks : getTasksByUser(currentUser);

  const handleCreateTask = () => {
    addTask(newTask);
    setNewTask({
      title: '',
      description: '',
      assignedTo: '',
      status: 'In Progress',
    });
    setIsCreatingTask(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-akkodis-navy">
          {isAdmin ? 'All Tasks' : 'My Tasks'}
        </h2>
        {isAdmin && (
          <button
            onClick={() => setIsCreatingTask(true)}
            className="bg-akkodis-cyan text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Create New Task
          </button>
        )}
      </div>

      {isCreatingTask && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Create New Task</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Task Title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Task Description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <select
              value={newTask.assignedTo}
              onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Team Member</option>
              {users
                .filter((user) => user.role === 'member')
                .map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
            </select>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsCreatingTask(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateTask}
                className="bg-akkodis-cyan text-white px-4 py-2 rounded hover:bg-opacity-90"
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {userTasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-akkodis-navy">{task.title}</h3>
                <p className="text-gray-600 mt-2">{task.description}</p>
                <div className="mt-2 text-sm text-gray-500">
                  Assigned to: {users.find((u) => u.id === task.assignedTo)?.name}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <select
                  value={task.status}
                  onChange={(e) => updateTaskStatus(task.id, e.target.value as TaskStatus)}
                  className="p-2 border rounded"
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Blocked">Blocked</option>
                </select>
                {isAdmin && (
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 