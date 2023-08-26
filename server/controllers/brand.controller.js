import brandModel from '../models/brand.model.js'


export const createBrand = async(req,res,next)=>{
    try {
        const newBrand = new brandModel({...req.body})
        await newBrand.save().then(savedData =>{
            res.status(200).json({success: true, message: 'dữ liệu lưu thành công'});
        }).catch(err =>{
            res.status(200).json({success: false, message: 'dữ liệu lưu ko thành công'});
        })

    } catch (error) {

    }
}

export const getList = async(req,res,next) => {
    try {
        const data = await brandModel.find({},{createdAt: 0,updatedAt: 0})
        .populate('topList.product')
        .exec()
        if(data){
            const newData = await Promise.all(data.map(async dt => {
                const listProduct = await dt.listProduct
                const listCategory = await dt.listCategory
                return {...dt._doc,listProduct: listProduct,listCategory: listCategory}

            }))
            res.status(200).json({success: true, data: newData});

        }
            res.status(200).json({success: false, message: 'dữ liệu không thể lấy'});

    } catch (error) {

    }
}
export const getId = async(req,res,next) => {
    try {
    
        const data= await brandModel.findOne({_id:req.params.id},{createdAt: 0,updatedAt: 0}).populate('topList.product').exec()
        if(data)
        {
            const listCategory = await data.listCategory
            const listProduct = await data.listProduct
            res.status(200).json({success: true, data: {...data._doc,listCategory:listCategory,listProduct: listProduct}});

        }
            res.status(200).json({success: false, message: 'dữ liệu không thể lấy'});
    

    } catch (error) {

    }
}
export const updateId = async(req,res,next) => {
    try{
        await brandModel.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            { new: true }
        ).then(data => {
            res.status(200).json({success: true, message: "cập nhật thành công"});
        }).catch(err => {
            res.status(200).json({success: true, message: "cập nhật ko thành công"});
            
        })
    }catch{err => {

    }}
}

export const updateListTop = async(req,res,next) => {
    try{
        const newList = []
         req.body.listProduct.find(data => {
            newList.push({product: data})
        });
        console.log(newList)
        await brandModel.findOneAndUpdate({_id: req.params.brandId},{topList: newList},{new: true}).then(data => {
            res.status(200).json({success: true,message: "Cập nhật thành công"})
        }).catch(err => {
            res.status(200).json({success: false,message: "Cập nhật không thành công"})

        })
        
    }catch(err) {

    }
}

export const getListTop = async(req,res,next) => {
    try{
        
        await brandModel.find({_id: req.params.brandId})
        .populate('topList.product')
        .exec()
        .then(data => {
            res.status(200).json({success: true,message: data})
        }).catch(err => {
            res.status(200).json({success: false,message: "Cập nhật không thành công"})

        })
        
    }catch(err) {

    }
}


export const deleteId = async(req,res,next) =>{
    try{
        await brandModel.findByIdAndDelete(req.params.id).then(data =>{
            res.status(200).json({success:true , message: "xóa thành công"})
        }).catch(err=>{
            res.status(200).json({success:false , message: "xóa không thành công"})

        })
    }catch(err){

    }
}