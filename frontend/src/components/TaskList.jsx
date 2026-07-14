// import TaskItem from './TaskItems';


// const TaskList = ({ tasks, onStatusChange, onDelete }) => {

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-bold text-gray-700 mb-4">Your Tasks</h2>
      
//       {tasks.length === 0 ? (
//         <p className="text-gray-500 text-center bg-white p-6 rounded-lg shadow-sm">
//           No tasks found. Time to get to work!
//         </p>
        
//       ) : (
//         tasks.map((task) => (
//           <TaskItem 
//             key={task._id} 
//             task={task} 
//             onStatusChange={onStatusChange} 
//             onDelete={onDelete} 
//           />
//         ))
//       )}
//     </div>
//   );
// };

// export default TaskList;



import TaskItem from './TaskItems';

const TaskList = ({ tasks, onStatusChange, onDelete }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-200">Your Tasks</h2>
        <span className="text-slate-500 text-sm">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</span>
      </div>
      
      {tasks.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed border-slate-800 rounded-3xl">
          <p className="text-slate-500 font-medium">No tasks yet. Get productive! ✍️</p>
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskItem 
              key={task._id} 
              task={task} 
              onStatusChange={onStatusChange} 
              onDelete={onDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;