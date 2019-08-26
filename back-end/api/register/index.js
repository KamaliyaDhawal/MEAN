const express = require('express')
const router = express.Router();

var multer  = require('multer')
var upload = multer({ dest: 'upload/' })

const controller = require('./register.controller');

router.post('/save', upload.single('image'), controller.save);

module.exports = router;