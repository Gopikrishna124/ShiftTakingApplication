const express=require('express')
const router=express.Router()
const createannouncementController=require('../Controllers/Announcement/CreateAnnouncement').module
const getAllAnnouncementController=require('../Controllers/Announcement/GetAllAnnouncement').module
const deleteAnnouncementController=require('../Controllers/Announcement/DeleteAnnounecment').module


router.post('/',createannouncementController)

//getAll announcements

router.get('/',getAllAnnouncementController)

//delete announcement

router.delete('/:id',deleteAnnouncementController)

exports.module=router