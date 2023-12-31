const express = require("express");
const router = express();

const PackageRouter = require('../controllers/PackageController');

router.get('/api/package', PackageRouter.getAll);
router.get('/api/package/:id', PackageRouter.getAllById);
router.post('/api/package', PackageRouter.createData);
router.put('/api/package/:id', PackageRouter.updateDataUsingPut);
router.patch('/api/package/:id', PackageRouter.updateDataUsingPatch);
router.delete('/api/package/:id', PackageRouter.deleteDataById);

module.exports = router;