const express = require('express');
const router = express.Router();

const responser = require('../response')()

const LogModel = require('../../models/log')
let LogsController = require('../../controllers/logs')
LogsController = new LogsController(new LogModel)

router.get('/latests', function(req, res) {
  responser(res, LogsController.latests())
});

router.get('/:id', function(req, res) {
  responser(res, LogsController.one(req.params.id))
});

module.exports = router;
