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

//clear button
router.delete('/:id', (req, res) => {
    let sqlQuery = 'DELETE FROM "shoppinglist" WHERE ID=$1';
    let deletedItem = [req.params.id]
    pool.query(sqlQuery, deletedItem)
    .then(dbRes => {
        console.log('deleted!');
        res.sendStatus(200)
    })
})

router.delete('/', (req, res) => {
    let sqlQuery = 'DELETE FROM "shoppinglist"';
    pool.query(sqlQuery)
    .then(dbRes => {
        console.log('deleted!');
        res.sendStatus(200)
    })
})

module.exports = router;