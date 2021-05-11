var express = require('express');
var router = express.Router();
const Books = require('../db/Books')
const Users = require('../db/Users')
const session = require('express-session')

router.get("/getusers", function (req, res, next) {
    // var booklist = [];
    // let params = URL.parse(req,res,true).body;
    Users.find(function (err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: "Server Error"
            })
        } else {
            return res.status(200).json(data)
        }
    })
})

router.post("/adduser", function (req, res, next) {
    console.log(req.body);
    new Users(req.body).save(function (err, data) {
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

}
)

router.post("/deluser",(req,res)=>{
    Users.findByIdAndRemove(req.body._id,err=>{
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
            data: req.body.userName+'already delete'
        })
    })
})

router.post("/edituser",(req,res)=>{
    let id = req.body._id
    Users.findByIdAndUpdate(id,req.body,err=>{
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
            data: req.body.userName+'already update'
        })
    })
})

// })

module.exports = router;
