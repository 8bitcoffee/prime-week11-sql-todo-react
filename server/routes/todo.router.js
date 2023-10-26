const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/',(req,res) => {
    let queryText = `SELECT * FROM "todo-list" ORDER BY "complete","duedate","priority","title";`;
    pool.query(queryText).then((result) => {
        console.log(`GET from '/todo' was successful.`);
        res.send(result.rows);
    })
    .catch((error) => {
        console.error(`Error in GET '/todo'`, error);
        res.sendStatus(500);
    })
})
// POST
router.post('/',(req,res) => {
    let task = req.body;
    let queryText = `INSERT INTO "todo-list" (title, duedate, priority, description)
                    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText,[task.title, task.duedate, task.priority, task.description]).then((result) => {
        console.log(`POST to '/todo' was successful`);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error in POST '/todo'`, error);
        res.sendStatus(500);
    })
})
// PUT

// DELETE

module.exports = router;