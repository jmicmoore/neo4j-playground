var express = require('express');
const router = express.Router();
var jsonParser = require('body-parser').json();

router.use(jsonParser);

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/eventTypes', (req, res) => {
    res.send([
        {
            event: "one"
        },
        {
            event: "two"
        },
        {
            event: "three"
        }
    ]);
});

router.post('/eventTypes', (req, res) => {
    const eventType = req.body;
    console.log("posted event type", eventType);
});

module.exports = router;
