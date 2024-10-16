const express=require('express')
const router=express.Router()

const addClientController=require('../Controllers/Clients/addClient').module
const getAllclientsController=require('../Controllers/Clients/getAllClients').module
const getSingleClientController=require('../Controllers/Clients/getSingleClient').module
const updateClientController=require('../Controllers/Clients/updateClient').module
const deleteClientController=require('../Controllers/Clients/deleteClient').module




//add client

router.post('/',addClientController)

//get all clients//
router.get('/',getAllclientsController)

//get singleClient//

router.get('/find/:id',getSingleClientController)

//update client //
router.patch('/:id',updateClientController)

//delete client //
router.delete('/:id',deleteClientController)




exports.module=router