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

// PUT
router.put('/:id', (req, res) => {
    let sqlParams = [req.params.id];
    let sqlQuery = `
        UPDATE "shoppinglist"
        SET "purchased" = TRUE
        WHERE "id" = $1       
        `;
    pool.query(sqlQuery, sqlParams).then(dbResponse => {
        res.sendStatus(200);
    }).catch(dbError => {
        console.log('DB failed to PUT: ', error)
        res.sendStatus(500);
    })

})


module.exports = router;