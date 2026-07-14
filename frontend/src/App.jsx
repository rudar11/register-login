import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'; 
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_URL = 'https://register-login-eh1o.onrender.com/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  // 1. Database se tasks lana
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        setTasks(response.data.data);
      } catch (err) {
        toast.error("Failed to load tasks"); 
      }
    };
    fetchTasks();
  }, []);

  // 2. add karna
  const addTask = async (taskData) => {
    try {
      const response = await axios.post(API_URL, taskData);
      setTasks([response.data.data, ...tasks]); 
      toast.success('Task added successfully! 🎉'); 
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add task');
    }
  };

  // 3. Task delete karna
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
      toast.success('Task deleted! 🗑️');
    } catch (err) {
      toast.error("Failed to delete task");
    }
  };

  // 4. Task ka status update karna
  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Completed' ? 'Pending' : 'Completed';
    try {
      const response = await axios.put(`${API_URL}/${id}`, { status: newStatus });
      setTasks(tasks.map(task => task._id === id ? response.data.data : task));
      toast.success(`Task marked as ${newStatus}! ✅`); 
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 font-sans">
      
      {/* Dark theme matching toast notifications */}
      <Toaster 
        position="top-right" 
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#1e293b', // slate-800
            color: '#fff',
            borderRadius: '12px',
          },
        }}
      /> 
      
      <div className="max-w-2xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
            Task Tracker
          </h1>
          <p className="text-slate-400">Manage your daily goals efficiently</p>
        </header>
        
        {/* Naya task add karne wala form */}
        <TaskForm onAddTask={addTask} />

        {/* List render karne wala component */}
        <TaskList 
          tasks={tasks} 
          onStatusChange={toggleStatus} 
          onDelete={deleteTask} 
        />
      </div>
    </div>
  );
}

export default App;