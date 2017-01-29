class ApiController {

  constructor(){
    this.response = (data, statusCode) => ({data: data, statusCode: statusCode})
  }

  success(data = {}, statusCode = 200) {
    return this.response({data:data}, statusCode)
  }

  error(message = '', statusCode = 400) {
    return this.response({error: message}, statusCode)
  }

  notFound(message = 'not found'){
    return this.response({error: message}, 404)
  }
}

module.exports = ApiController
