export const addTask = task => {
    return {
      type: 'ADD_TASK',
      task: {
        name: task.newToDo,
        done: false
      }
    };
  },
  deleteTask = task => {
    return {
      type: 'DELETE_TASK',
      task
    };
  },
  completeTask = task => {
    return {
      type: 'COMPLETE_TASK',
      task
    };
  };

export default { addTask, deleteTask, completeTask };
