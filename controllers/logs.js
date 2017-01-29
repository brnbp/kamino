const ApiController = require('./api')

class LogsController extends ApiController {

  constructor(LogModel) {
    super()
    this.LogModel = LogModel
  }

  latests() {
    return super.success(this.LogModel.latests())
  }
  //latests() { return response.error('all latests logs here') }
  //latests() { return response.notFound('latests logs not founded') }

  one(id) {
    return super.success(this.LogModel.one(id))
  }

}

module.exports = LogsController
