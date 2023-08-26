import express from 'express'
import {createPage,deleteId,getId,getList,updateId} from '../controllers/page.controller.js'
const route = express.Router()

route.get('/list',getList)
route.post('/create',createPage)
route.put('/update/:id',updateId)
route.delete('/delete/:id',deleteId)
route.get('/list/:id',getId)


export default route