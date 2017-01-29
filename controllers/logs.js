const response = require('./response')

function LogsController(LogModel) {

  this.latests = () => response.success(LogModel.latests())
  //this.latests = () => response.error('all latests feeds here')
  //this.latests = () => response.notFound('latests feeds not founded')

  this.one = (id) => response.success(LogModel.one(id))

}

module.exports = LogsController
