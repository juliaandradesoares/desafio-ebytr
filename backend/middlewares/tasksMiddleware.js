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

module.exports = {
  validateTaskData,
};
