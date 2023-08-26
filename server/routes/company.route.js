import express from 'express'
import {updateAll,createSocial,deleteSocial,updateSocial} from '../controllers/company.controller.js'

const route = express.Router()


route.put('/update',updateAll)
route.patch('/update-social/:id',updateSocial)
route.delete('/delete-social/:id',deleteSocial)
route.post('/create-social',createSocial)

export default route