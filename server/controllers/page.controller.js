import pageModel from '../models/page.model.js'

export const createPage = async(req,res,next)=>{
    try {
        const newPage = new pageModel({...req.body})
        await newPage.save().then(savedData =>{
            res.status(200).json({success: true, message: 'dữ liệu lưu thành công'});
        }).catch(err =>{
            res.status(200).json({success: false, message: 'dữ liệu lưu ko thành công'});
        })

    } catch (error) {

    }
}

export const getList = async(req,res,next) => {
    try {
        const listPage = await pageModel.find({},{createdAt: 0,updatedAt: 0}).then(data =>{
            res.status(200).json({success: true, data: data});
        }).catch(err =>{
            res.status(200).json({success: false, message: 'dữ liệu không thể lấy'});
        })

    } catch (error) {

    }
}
export const getId = async(req,res,next) => {
    try {
        const listPage = await pageModel.findOne({_id:req.params.id},{createdAt: 0,updatedAt: 0}).then(data =>{
            res.status(200).json({success: true, data: data});
        }).catch(err =>{
            res.status(200).json({success: false, message: 'dữ liệu không thể lấy'});
        })

    } catch (error) {

    }
}
export const updateId = async(req,res,next) => {
    try{
        await pageModel.findByIdAndUpdate(
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
export const deleteId = async(req,res,next) =>{
    try{
        await pageModel.findByIdAndDelete(req.params.id).then(data =>{
            res.status(200).json({success:true , message: "xóa thành công"})
        }).catch(err=>{
            res.status(200).json({success:false , message: "xóa không thành công"})

        })
    }catch(err){

    }
}