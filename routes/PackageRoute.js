const express = require("express");
const router = express();

const PackageRouter = require('../controllers/PackageController');

router.get('/api/packages', PackageRouter.getAll);
router.get('/api/package/:id', PackageRouter.getAllById);

module.exports = router;