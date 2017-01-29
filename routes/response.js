module.exports = () =>
  (routerResponse, fnReturn) =>
    routerResponse
      .status(fnReturn.statusCode)
      .send(fnReturn.data)