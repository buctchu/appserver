'use strict';
const router = require('koa-router')();
const controller = require('./controller');

router.post('/signin', controller.signin);

module.exports = router;
