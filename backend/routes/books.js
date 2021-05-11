var express = require('express');
var router = express.Router();
const Books = require('../db/Books')
const Users = require('../db/Users')
const session = require('express-session')

router.get("/getbooks", function (req, res, next) {
    // var booklist = [];
    // let params = URL.parse(req,res,true).query;
    Books.find(function (err, data) {
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

router.post("/addbooks", function (req, res, next) {
    console.log(req.body);
    new Books(req.body).save(function (err, data) {
        // console.log(req.query);
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

router.post("/delbook",(req,res)=>{
    Books.findByIdAndRemove(req.body._id,err=>{
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

router.post("/editbook",(req,res)=>{
    let id = req.body._id
    console.log(req.body._id);
    Books.findByIdAndUpdate(id,req.body,err=>{
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
            data: req.body.bookName+' already update'
        })
    })
})

// })

module.exports = router;
