class LogModel {
  latests() {
    return 'latests logs here'
  }

  one(id) {
    return [{
      id: id
    }]
  }
}

module.exports = LogModel
