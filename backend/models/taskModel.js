const connection = require('./connection');

const getAllTasksModel = async () => {
  const [tasks] = await connection.execute(
    'SELECT * FROM ToDoList.tasks ORDER BY id',
  );

  return tasks;
};

const addTaskModel = async (task, status) => {
  const [newTask] = await connection.execute(
    `INSERT INTO ToDoList.tasks (task, status)
    VALUES (?, ?)`, [task, status],
  );

  return {
    id: newTask.insertId, 
    task,
    status,
    creation_date: newTask.creation_date,
  };
}

module.exports = {
  getAllTasksModel,
  addTaskModel,
};
