const {
  DataRepository
} = require("../services/data-repositpry");

const repository = new DataRepository();


exports.getAll = (req, res) => {
  res.status(200).json(repository.getAll());
};

exports.dataRepository = repository;