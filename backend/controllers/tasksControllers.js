const tasksService = require('../services/tasksService');

const getAllTasksController = async (req, res) => {
  const tasks = await tasksService.getAllTasksService();

  return res.status(200).json(tasks);
};

module.exports = {
  getAllTasksController,
};
