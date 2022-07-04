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

const getTaskByIdModel = async (id) => {
  const [task] = await connection.execute(
    'SELECT * FROM ToDoList.tasks WHERE id = ?', [id],
  );

  return task;
};

const deleteTaskModel = async (id) => {
  await connection.execute(
    `DELETE FROM ToDoList.tasks
    WHERE id = ?`, [id],
  );
}

module.exports = {
  getAllTasksModel,
  addTaskModel,
  getTaskByIdModel,
  deleteTaskModel,
};
