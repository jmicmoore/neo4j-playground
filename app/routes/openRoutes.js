var express = require('express');
const openRouter = express.Router();
const packageJsonFile = require('../../package.json');

openRouter.get('/version', (req, res) => {
    res.json({
        version: packageJsonFile.version
    })
});

module.exports = openRouter;