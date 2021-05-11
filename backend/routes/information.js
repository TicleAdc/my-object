var express = require('express');
var router = express.Router();
const Books = require('../db/Books')
const Users = require('../db/Users')
const Info = require('../db/Information')
const session = require('express-session')

router.get('/getInfo',(req,res)=>{
    Info.find((err,data)=>{
        if(err){
            return res.status(500).json({
                err_code: 500,
                message: "Server Error"
            })
        }else{
            return res.status(200).json(data)
        }
    })
})

router.post('/lendbook',(req,res)=>{
    console.log(req.body);
    new Info(req.body).save(function (err, data) {
        // console.log(req.body);
        if (err) {
            console.log(err)
            return res.status(500).json({
                err_code: 500,
                message: "Server Error"
            })
        }
        res.status(200).json({
            err_code: 0,
            message: "OK",
            data: req.body
        })
    })
})

router.post('/delinfo',(req,res)=>{
    Info.findByIdAndRemove(req.body._id,err=>{
        if (err) {
            console.log(err)
            return res.status(500).json({
                err_code: 500,
                message: "Server Error"
            })
        }
        res.status(200).json({
            err_code: 0,
            message: "delete success",
            data: req.body.bookName+'already delete'
        })
    })
})

module.exports = router;