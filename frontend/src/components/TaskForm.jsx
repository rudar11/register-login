// import { useState } from 'react';

// const TaskForm = ({ onAddTask }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim()) {
//       setError('Task title is mandatory!');
//       return;
//     }
//     setError('');
//     onAddTask({ title, description });
//     setTitle('');
//     setDescription('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
//       <div className="mb-4">
//         <input 
//           type="text" 
//           placeholder="Task Title (Required)" 
//           value={title} 
//           onChange={(e) => setTitle(e.target.value)} 
//           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <textarea 
//           placeholder="Description (Optional)" 
//           value={description} 
//           onChange={(e) => setDescription(e.target.value)} 
//           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-20"
//         ></textarea>
//       </div>
//       {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
//       <button 
//         type="submit" 
//         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
//       >
//         Add Task
//       </button>
//     </form>
//   );
// };

// export default TaskForm;



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
    <form onSubmit={handleSubmit} className="bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Create New Task </h2>
      
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Task Title (Required)" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="w-full px-4 py-3.5 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500 transition-all"
        />
      </div>
      
      <div className="mb-6">
        <textarea 
          placeholder="Description (Optional)" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="w-full px-4 py-3.5 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500 transition-all h-24 resize-none"
        ></textarea>
      </div>
      
      {error && <p className="text-red-400 text-sm mb-4 font-medium">⚠️ {error}</p>}
      
      <button 
        type="submit" 
        className="w-full bg-indigo-600  text-white font-bold py-3.5 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-indigo-900/20"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;