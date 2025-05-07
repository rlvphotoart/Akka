import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TaskStatus = 'In Progress' | 'Completed' | 'Blocked';

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  status: TaskStatus;
  createdAt: string;
}

interface TaskStore {
  tasks: Task[];
  currentUser: string | null;
  setCurrentUser: (user: string | null) => void;
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTaskStatus: (taskId: string, status: TaskStatus) => void;
  deleteTask: (taskId: string) => void;
  getTasksByUser: (userId: string) => Task[];
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      currentUser: null,
      setCurrentUser: (user) => set({ currentUser: user }),
      addTask: (task) => set((state) => ({
        tasks: [...state.tasks, {
          ...task,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        }],
      })),
      updateTaskStatus: (taskId, status) => set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, status } : task
        ),
      })),
      deleteTask: (taskId) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      })),
      getTasksByUser: (userId) => get().tasks.filter((task) => task.assignedTo === userId),
    }),
    {
      name: 'task-storage',
    }
  )
); 