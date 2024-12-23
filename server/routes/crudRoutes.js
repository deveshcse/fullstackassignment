const express = require('express');

const router = express.Router();

const {createRecord, getAllRecords, updateRecord, deleteRecord} = require('../controllers/studentRecordControllers')

//routes
router.route('/addnewstudent').post(createRecord)
router.route('/allstudents').get(getAllRecords);
router.route('/updatestudent/:id').put(updateRecord);
router.route('/deletestudent/:id').delete(deleteRecord);


module.exports = router