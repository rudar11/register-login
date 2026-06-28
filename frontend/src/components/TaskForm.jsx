import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Task title is mandatory!');
      return;
    }
    setError('');
    onAddTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Task Title (Required)" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea 
          placeholder="Description (Optional)" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-20"
        ></textarea>
      </div>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;