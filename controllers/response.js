const response = (data, statusCode) => ({data: data, statusCode: statusCode})

const success = (data = {}, statusCode = 200) => response({data:data}, statusCode)
const error = (message = '', statusCode = 400) => response({error: message}, statusCode)
const notFound = (message = 'not found') => response({error: message}, 404)

module.exports = {
  success,
  error,
  notFound
}