const express = require('express');
const bcrypt = require('bcryptjs');
const db = require("../db");
const router = express.Router();


/**
 * @description 정보 가져오기
 */
router.post("/login", (req, res) => {


    // 성공  0
    // 아이디 없음 1
    // 비번 불일치 2
    let result = 0;
    db.query('select * from member where email = ?', [req.body.id], (err, rows) => {
        if (!rows.length) {
            res.send({state: 1})
        } else {
            bcrypt.compare(req.body.pw, rows[0].pw ).then(isMatch => {
                if (!isMatch) {
                    res.send({state: 2})
                }else{
                    res.send({state: 0})
                }
            })
        }

    })


});


/**
 * @description 정보 가져오기
 */
router.post("/signup", (req, res) => {


    let {firstName, lastName, email, phone, pw} = req.body

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(pw, salt, (err, hash) => {
            if (err) throw err;
            pw = hash;

            db.query('insert into member(first_name, last_name, email, phone, pw) values(?,?,?,?,?)', [firstName, lastName, email, phone, pw], (err, rows) => {

                // res.send({state : result})
            })
        })
    })


});


module.exports = router;