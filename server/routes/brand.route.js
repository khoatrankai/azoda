import express from 'express'
import {getId,getList,createBrand,deleteId,updateId,updateListTop,getListTop} from '../controllers/brand.controller.js'
const route = express.Router()


route.get('/list',getList)
route.post('/create',createBrand)
route.put('/update/:id',updateId)
route.delete('/delete/:id',deleteId)
route.get('/list/:id',getId)
route.post('/update-top/:brandId',updateListTop)
route.get('/get-top/:brandId',getListTop)

export default route