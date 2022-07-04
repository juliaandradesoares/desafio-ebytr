const tasksService = require('../services/tasksService');

const validateTaskData = (req, res, next) => {
  const { task, status } = req.body;

  if (!task) {
    return res.status(400).json({ message: '"task" is required' });
  }

  if (!status) {
    return res.status(400).json({ message: '"status" is required' });
  }

  next();
}

const validateTaskId = async (req, res, next) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: '"id" is required' });
  }

  const task = await tasksService.getTaskByIdService(id);

  if (task.length === 0) {
    return res.status(404).json({ message: 'id not found'});
  }

  next();
}

module.exports = {
  validateTaskData,
  validateTaskId,
};
