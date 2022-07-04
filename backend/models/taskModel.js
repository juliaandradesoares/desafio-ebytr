const connection = require('./connection');

const getAllTasksModel = async () => {
  const [tasks] = await connection.execute(
    'SELECT * FROM ToDoList.tasks ORDER BY id',
  );

  return tasks;
};

module.exports = {
  getAllTasksModel,
};
