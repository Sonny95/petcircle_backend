const express = require('express');
const db = require("../db");
const router = express.Router();



/**
 * @description 정보 가져오기
 */
router.get("/birdList", (req, res) => {

    db.query('SELECT * FROM bird_product_list', [], (err, rows)=>{
        console.log(rows,':::::')
        res.send(rows)
    })
});


/**
 * @description 정보 가져오기
 */
router.get("/dogList", (req, res) => {

    db.query('SELECT * FROM dog_product_list', [], (err, rows)=>{
        console.log(rows,':::::')
        res.send(rows)
    })
});

/**
 * @description 정보 가져오기
 */
router.get("/catList", (req, res) => {

    db.query('SELECT * FROM cat_product_list', [], (err, rows)=>{
        console.log(rows,':::::')
        res.send(rows)
    })
});
/**
 * @description 정보 가져오기
 */
router.get("/otherList", (req, res) => {

    db.query('SELECT * FROM other_product_list', [], (err, rows)=>{
        console.log(rows,':::::')
        res.send(rows)
    })
});



module.exports = router;