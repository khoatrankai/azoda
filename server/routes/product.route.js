import express from 'express'
import multer from 'multer'
import {createProduct,listCategotyBrand,productBrand,productCategory,deleteId,getId,getList,updateId,getProductsBrand,getProductsCategory,filterProduct} from '../controllers/product.controller.js'
const route = express.Router()
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage ,
//     limits: {
//       fileSize: 1024 * 1024 * 5 // Giới hạn tải lên 5MB (đơn vị byte)
//     }});

route.get('/list',getList)
route.post('/create',createProduct)
route.get('/filter',filterProduct)
route.put('/update/:id',updateId)
route.delete('/delete/:id',deleteId)
route.get('/list/:id',getId)
route.get('/productbrand',productBrand)
route.get('/listcategorybrand',listCategotyBrand)
route.get('/productcategory',productCategory)
route.get('/list-brand/:brandId',getProductsBrand)
route.get('/list-category/:categoryId',getProductsCategory)


export default route