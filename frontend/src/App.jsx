import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'; // ✅ Toast Import
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_URL = 'http://localhost:3000/api/tasks'; 

function App() {
  const [tasks, setTasks] = useState([]);

  // 1. Database se tasks lana
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        setTasks(response.data.data);
      } catch (err) {
        toast.error("Failed to load tasks"); // ✅ Toast Error
      }
    };
    fetchTasks();
  }, []);

  // 2. Naya task add karna
  const addTask = async (taskData) => {
    try {
      const response = await axios.post(API_URL, taskData);
      setTasks([response.data.data, ...tasks]); 
      toast.success('Task added successfully! 🎉'); // ✅ Toast Success
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add task');
    }
  };

  // 3. Task delete karna
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
      toast.success('Task deleted! 🗑️'); // ✅ Toast Success
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
      toast.success(`Task marked as ${newStatus}! ✅`); // ✅ Toast Success
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans">
      
      {/* ✅ Ye container hai jo notification dikhayega */}
      <Toaster position="top-right" reverseOrder={false} /> 
      
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-8 text-center drop-shadow-sm">
          Task Tracker ✓
        </h1>
        
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