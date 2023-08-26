import express from 'express'
import {createCustomer,deleteId,getId,getList,updateAddress,updateId,updateiAddress,addAddress,deleteAddress} from '../controllers/customer.controller.js'
const route = express.Router()

route.get('/list',getList)
route.post('/create',createCustomer)
route.put('/update/:id',updateId)
route.delete('/delete/:id',deleteId)
route.get('/list/:id',getId)
route.patch('/update-address/:id',updateAddress)
route.patch('/update-iaddress/:id',updateiAddress)
route.post('/add-address/:id',addAddress)
route.delete('/delete-address/:id',deleteAddress)


export default route