import TaskItem from './TaskItems';


const TaskList = ({ tasks, onStatusChange, onDelete }) => {

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Your Tasks</h2>
      
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center bg-white p-6 rounded-lg shadow-sm">
          No tasks found. Time to get to work!
        </p>
        
      ) : (
        tasks.map((task) => (
          <TaskItem 
            key={task._id} 
            task={task} 
            onStatusChange={onStatusChange} 
            onDelete={onDelete} 
          />
        ))
      )}
    </div>
  );
};

export default TaskList;