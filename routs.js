const express = require('express');
const mongoose = require('./mongoose');


const router = express.Router();

router.post("/new", mongoose.createUrl);

router.get("/:urlId", mongoose.getUrl);

module.exports = router;