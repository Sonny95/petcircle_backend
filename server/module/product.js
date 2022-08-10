const express = require('express');
const db = require("../db");
const router = express.Router();



/**
 * @description 정보 가져오기
 */
router.post("/detail", (req, res) => {

    const {type , key} = req.body
    console.log(type, key,'::::::')
    // db.query('SELECT * FROM bird_product_list', [], (err, rows)=>{
    //     console.log(rows,':::::')
    //     res.send(rows)
    // })
});



module.exports = router;