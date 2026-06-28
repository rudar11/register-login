const TaskItem = ({ task, onStatusChange, onDelete }) => {
  const isCompleted = task.status === 'Completed';

  return (
    <div className={`p-5 mb-4 rounded-lg shadow-sm border-l-4 flex flex-col sm:flex-row justify-between items-start sm:items-center ${isCompleted ? 'bg-gray-50 border-green-500' : 'bg-white border-blue-500'}`}>
      <div className="mb-3 sm:mb-0">
        <h3 className={`text-lg font-bold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
          {task.title}
        </h3>
        {task.description && (
          <p className="text-gray-600 text-sm mt-1">{task.description}</p>
        )}
        <span className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-full ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
          {task.status}
        </span>
      </div>
      
      <div className="flex gap-2 w-full sm:w-auto">
        <button 
          onClick={() => onStatusChange(task._id, task.status)}
          className="flex-1 sm:flex-none px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded transition"
        >
          {isCompleted ? 'Mark Pending' : 'Mark Done'}
        </button>
        <button 
          onClick={() => onDelete(task._id)}
          className="flex-1 sm:flex-none px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;