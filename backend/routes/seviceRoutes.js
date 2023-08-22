const express = require('express');
const router = express.Router();
const ServiceRequest = require('../controllers/seviceController');

router.post('/submit',ServiceRequest.bookService);
router.get('/getservicerequest',ServiceRequest.getServiceRequest);

module.exports = router;