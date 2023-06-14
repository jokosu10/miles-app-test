const express = require("express");
const router = express();

const PackageRouter = require('../controllers/PackageController');

router.get('/api/packages', PackageRouter.getAll);

module.exports = router;