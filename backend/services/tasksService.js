const { getAllTasksModel, addTaskModel, deleteTaskModel, getTaskByIdModel } = require('../models/taskModel');

const getAllTasksService = async () => {
  const tasks = await getAllTasksModel();

  return tasks;
};

const addTaskService = async (task, status) => {
  const newTask = await addTaskModel(task, status);

  return newTask;
};

const getTaskByIdService = async (id) => {
  const task = await getTaskByIdModel(id);

  return task;
}

const deleteTaskService = async (id) => {
  await deleteTaskModel(id);
}

module.exports = { 
  getAllTasksService,
  addTaskService,
  getTaskByIdService,
  deleteTaskService,
};
