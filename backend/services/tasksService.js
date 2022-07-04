const { getAllTasksModel, addTaskModel } = require('../models/taskModel');

const getAllTasksService = async () => {
  const tasks = await getAllTasksModel();

  return tasks;
};

module.exports = { 
  getAllTasksService,
};
