const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.post('/', (req,res)=> {
    const newItem = req.body;
    const sqlQuery = `INSERT INTO shoppinglist ("item", "quantity", "unit") VALUES ($1, $2, $3)`;
    pool.query(sqlQuery, [newItem.name, newItem.quantity, newItem.unit]).then((result)=> {
        console.log(`Added item to database`, newItem);
        res.sendStatus(201); // Created
    }).catch((error) => {
        console.log(`Error with database query ${newItem}`, error);
        res.sendStatus(500); // Server Error
    })
}) // end router.post

module.exports = router;