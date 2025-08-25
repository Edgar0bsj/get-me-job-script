const express = require("express");
const todayRouter = require("./app/router/jobs_today");

const app = express();
const port = 3006

app.use('/jobs/today', todayRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});
