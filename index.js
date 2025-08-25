const express = require("express");
const indexRouter = require("./app/router/index");

const app = express();
const port = 3006

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});
