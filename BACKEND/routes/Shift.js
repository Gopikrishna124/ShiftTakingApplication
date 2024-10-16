const express=require('express')
const router=express.Router()

const addShiftController=require('../Controllers/Shifts/addShift').module
const getAllShiftsController=require('../Controllers/Shifts/getAllShifts').module
const updateShiftController=require('../Controllers/Shifts/updateShift').module
const getShiftsByUserController=require('../Controllers/Shifts/getShitsByUserEmail').module
const unassignedShiftsController=require('../Controllers/Shifts/unAssignedShits').module
const getSingleShiftController=require('../Controllers/Shifts/getSingleShift').module
const deleteShiftController=require('../Controllers/Shifts/deleteShift').module
const assignShiftController=require('../Controllers/Shifts/assignShift').module
const addCasenotesController=require('../Controllers/Shifts/addCaseNotes').module
const addClockInController=require('../Controllers/Shifts/addClockIn').module
const addClockOutController=require('../Controllers/Shifts/addClockOut').module

//add shift
router.post('/',addShiftController)

//get all Shits

router.get('/',getAllShiftsController)

//get singleShift 

router.post('/find/:id',getSingleShiftController)

//updateShift

router.patch('/:id',updateShiftController)

// get shifts By users

router.post('/me',getShiftsByUserController)

//unAssign Shits

router.post('/unassign',unassignedShiftsController)

//delete shift

router.delete('/find/:id',deleteShiftController)

//assign shift

router.patch('/assign/:id',assignShiftController)

//adding case notes

router.put('/casenotes/:id',addCasenotesController)

//clock In

router.put('/clockin/:id',addClockInController)


router.put('/clockout/:id',addClockOutController)

exports.module=router