const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/',(req,res) => {
    let queryText = `SELECT * FROM "todo-list" ORDER BY "complete","duedate","priority","title";`;
    pool.query(queryText).then((result) => {
        console.log('GET todo list success');
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('GET request error', error);
        res.sendStatus(500);
    })
})
// POST

// PUT

// DELETE

module.exports = router;