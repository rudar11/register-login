// const TaskItem = ({ task, onStatusChange, onDelete }) => {
//   const isCompleted = task.status === 'Completed';

//   return (
//     <div className={`p-5 mb-4 rounded-lg shadow-sm border-l-4 flex flex-col sm:flex-row justify-between items-start sm:items-center ${isCompleted ? 'bg-gray-50 border-green-500' : 'bg-white border-blue-500'}`}>
//       <div className="mb-3 sm:mb-0">
//         <h3 className={`text-lg font-bold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
//           {task.title}
//         </h3>
//         {task.description && (
//           <p className="text-gray-600 text-sm mt-1">{task.description}</p>
//         )}
//         <span className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-full ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
//           {task.status}
//         </span>
//       </div>
      
//       <div className="flex gap-2 w-full sm:w-auto">
//         <button 
//           onClick={() => onStatusChange(task._id, task.status)}
//           className="flex-1 sm:flex-none px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded transition"
//         >
//           {isCompleted ? 'Mark Pending' : 'Mark Done'}
//         </button>
//         <button 
//           onClick={() => onDelete(task._id)}
//           className="flex-1 sm:flex-none px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded transition"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TaskItem;



const TaskItem = ({ task, onStatusChange, onDelete }) => {
  const isCompleted = task.status === 'Completed';

  return (
    <div className={`p-5 mb-4 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center ${
      isCompleted 
        ? 'bg-slate-900/50 border-slate-800 opacity-70' 
        : 'bg-slate-800 border-slate-700 hover:border-slate-600'
    }`}>
      <div className="w-full mb-4 sm:mb-0">
        <h3 className={`text-lg font-semibold ${isCompleted ? 'text-slate-500 line-through' : 'text-slate-100'}`}>
          {task.title}
        </h3>
        {task.description && (
          <p className="text-slate-400 text-sm mt-1">{task.description}</p>
        )}
      </div>
      
      <div className="flex gap-2 w-full sm:w-auto">
        <button 
          onClick={() => onStatusChange(task._id, task.status)}
          className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            isCompleted 
              ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' 
              : 'bg-indigo-600 text-white hover:bg-indigo-500'
          }`}
        >
          {isCompleted ? 'Undo' : 'Done'}
        </button>
        <button 
          onClick={() => onDelete(task._id)}
          className="flex-1 sm:flex-none px-4 py-2 bg-red-900/20 text-red-400 hover:bg-red-900/40 rounded-lg text-sm font-medium transition-all border border-red-900/50"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;