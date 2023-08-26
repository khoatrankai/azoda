import express from 'express'
import {getList,createPartner,deleteId,updateId,getId} from '../controllers/partner.controller.js'
const route = express.Router()

route.get('/list',getList)
route.post('/create',createPartner)
route.put('/update/:id',updateId)
route.delete('/delete/:id',deleteId)
route.get('/list/:id',getId)
export default route