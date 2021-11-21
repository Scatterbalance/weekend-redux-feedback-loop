const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

/** ---------- Post ---------- **/
router.post('/', (req, res)=>{
    console.log('/feedback POST',req.body);
    const queryString = 'INSERT INTO "feedback"("feeling", "understanding", "support", "comments") VALUES( $1, $2, $3, $4);';
    const values = [req.body[0],req.body[1],req.body[2],req.body[3]];
    pool.query(queryString, values).then( (results)=>{
        res.send( results.rows );
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})

module.exports = router;