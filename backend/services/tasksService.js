const { getAllTasksModel, addTaskModel } = require('../models/taskModel');

const getAllTasksService = async () => {
  const tasks = await getAllTasksModel();

  return tasks;
};

const addTaskService = async (task, status) => {
  const newTask = await addTaskModel(task, status);

  return newTask;
};

module.exports = { 
  getAllTasksService,
  addTaskService,
};
