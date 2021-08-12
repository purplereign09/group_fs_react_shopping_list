const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET
router.get('/', (req, res) => {
    let sqlQuery = 'SELECT * FROM "shoppinglist" ORDER BY "purchased", "item" ASC;';
    pool.query(sqlQuery).then(dbRes => {
        console.log('db Get successful');
        res.send(dbRes.rows)
    }).catch(error => {
        console.log('DB failed to GET.');
        res.sendStatus(500);
    })
})

module.exports = router;