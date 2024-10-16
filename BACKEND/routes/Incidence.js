const express=require('express')
const router=express.Router()

const addIncidenceController=require('../Controllers/Incidence/AddIncidence').module
const getAllIncidenceController=require('../Controllers/Incidence/getAllIncidence').module
const getsingleIncidenceController=require('../Controllers/Incidence/getSingleIncidence').module
const  deleteIncidenceController=require('../Controllers/Incidence/DeleteIncidence').module


//add incidence
router.post('/',addIncidenceController)

//getall incidence

router.get('/',getAllIncidenceController)

//get single incidence

router.get('/find/:id',getsingleIncidenceController)

//delete incidence

router.delete('/:id',deleteIncidenceController)
exports.module=router