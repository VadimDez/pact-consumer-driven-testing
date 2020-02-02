exports.getAll = (req, res) => {
  res.status(200).json([{
    id: 1,
    name: "Object #1"
  }]);
};