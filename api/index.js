var indexRouter = require('express').Router();
const crypto = require('crypto');

indexRouter.get('/generate_unique_link', generate_link);

function generate_link(req,res){
    crypto.randomBytes(64, (err, buf) => {
        if (err) throw err;
        res.send(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
    });
}

module.exports = indexRouter;