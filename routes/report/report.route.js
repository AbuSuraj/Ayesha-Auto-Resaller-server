const express = require('express');
const router = express.Router();
const { verifyJWT, verifyAdmin } = require('../../middleware/checkAuth.js')
 
const reportController = require('../../controllers/report/report.controller.js');

router.post('/', verifyJWT, reportController.addReport);
router.get('/', verifyJWT, reportController.getReports);
router.delete('/:id', verifyJWT, verifyAdmin, reportController.deleteReport);

router.delete('/item/:id', verifyJWT, verifyAdmin, reportController.deleteReportedItem);

module.exports = router;