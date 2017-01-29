const response = (data, statusCode) => ({data: data, statusCode: statusCode})

module.exports = {
  success: (data = {}, statusCode = 200) => response({data:data}, statusCode),
  error: (message = '', statusCode = 400) => response({error: message}, statusCode),
  notFound: (message = 'not found') => response({error: message}, 404)
}