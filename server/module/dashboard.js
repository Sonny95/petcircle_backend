const express = require('express');
const db = require("../db");
const router = express.Router();



/**
 * @description 정보 가져오기
 */
router.get("/graphData", (req, res) => {

    db.query('SELECT * FROM user.bird_product_list', [], (err, rows)=>{
        console.log(rows,'::::')
    })


    // res.send({lineData : data, columnData : data2})
});





module.exports = router;