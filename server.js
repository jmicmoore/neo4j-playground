const express = require('express');
const app = express();

const openRouter = require('./app/routes/openRoutes');
const router = require('./app/routes/routes');
const PORT = process.env.PORT || 3099;

app.use(openRouter);
app.use(router);

app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT + '!');
});
