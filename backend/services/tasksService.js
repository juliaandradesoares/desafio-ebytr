const { getAllTasksModel, addTaskModel, deleteTaskModel, getTaskByIdModel, updateTaskModel } = require('../models/taskModel');

const getAllTasksService = async () => {
  const tasks = await getAllTasksModel();

  return tasks;
};

const addTaskService = async (task) => {
  const newTask = await addTaskModel(task);

  return newTask;
};

const getTaskByIdService = async (id) => {
  const task = await getTaskByIdModel(id);

  return task;
}

const deleteTaskService = async (id) => {
  await deleteTaskModel(id);
}

const updateTaskService = async (id, status) => {
  const updatedTask = await updateTaskModel(id, status);

  return updatedTask;
};

module.exports = { 
  getAllTasksService,
  addTaskService,
  getTaskByIdService,
  deleteTaskService,
  updateTaskService,
};
