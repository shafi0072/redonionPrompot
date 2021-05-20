const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const PostSchema = require('../Schema/postSchema');
const LunchModel = new mongoose.model('lunch', PostSchema);
const dinner = new mongoose.model('dinner', PostSchema);
const breakfast = new mongoose.model('breakfast', PostSchema);


router.use(fileUpload())

router.post('/', (req, res) => {

    const fileUpload = req.files.file;
    const title = req.body.title;
    const description = req.body.title;
    const price = req.body.price;
    const category = req.body.category
    const filePath = `${__dirname}/Upload/${fileUpload.name}`
    fileUpload.mv(filePath, (err) => {
        if(err){
            console.log('error to upload file');
        }
        else{
            console.log('file Upload successfully');
        }    
    })

    if(req.body.category === 'dinner'){
        const newBody = new dinner({
            title: title,
            description: description,
            price: price,
            category: category,
            file : fileUpload.name
        })
        newBody.save((err) => {
            if(err){
                res.status(500).json({
                    message:'there was a serversite error to insert dinner'
                })
            }else{
                res.status(200).json({
                    message:'dinner inserted successfull'
                })
            }
        })
    }
    else if(req.body.category === 'lunch'){
        const newLunchModel = new LunchModel({
            title: title,
            description: description,
            price: price,
            category: category,
            file : fileUpload.name
        })
        newLunchModel.save((err) => {
            if(err){
                res.status(500).json({
                    message:'there was a serversite error to insert lunch'
                })
            }else{
                res.status(200).json({
                    message:'lunch inserted successfull'
                })
            }
        })
    }
    else{
        const newbreakfast = new breakfast({
            title: title,
            description: description,
            price: price,
            category: category,
            file : fileUpload.name
        })
        newbreakfast.save((err) => {
            if(err){
                res.status(500).json({
                    message:'there was a serversite error to insert breakfast'
                })
            }else{
                res.status(200).json({
                    message:'breakfast inserted successfull'
                })
            }
        })
    }
})

module.exports = router