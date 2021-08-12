const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

//Get Request 

router.get('/', (req, res) =>{
    let sqlQuery = `SELECT * FROM "shoppinglist" ORDER BY "purchased", "item" ASC`;

    pool.query(sqlQuery).then(dbRes => {
        console.log(dbRes.rows)
        res.send(dbRes.rows)
        
    }).catch(error => {
        console.log('error when Getting data', error)
        res.sendStatus(500)
    })
})


module.exports = router;