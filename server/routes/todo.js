const express = require('express');
const router = express.Router();
const { create, view } = require('../controllers/todo');
const auth = require('../middlewares/authentication');

router.use(auth);

router.post('/todo/create', create);

router.get('/todo/view/', view);

module.exports = router;