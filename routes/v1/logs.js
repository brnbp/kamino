const router = require('express').Router();
const responder = require('../response')()

const LogModel = require('../../models/log')
let LogsController = require('../../controllers/logs')
LogsController = new LogsController(new LogModel)

router.get('/latests', function(req, res) {
  responder(res, LogsController.latests())
});

router.get('/:id', function(req, res) {
  responder(res, LogsController.one(req.params.id))
});

module.exports = router;
