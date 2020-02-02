class DataRepository {
  constructor() {
    this.data = [{
      id: 1,
      name: 'Object #1'
    }, {
      id: 2,
      name: 'Object #2'
    }]
  }

  getAll() {
    return this.data;
  }
}

module.exports = {
  DataRepository
};