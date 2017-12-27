'use strict';
const router = require('koa-router')();
const controller = require('./controller');

router.post('/login', controller.login);

module.exports = router;
