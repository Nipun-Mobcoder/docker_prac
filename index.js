import express from 'express';
import os from 'os'

const app = express();

app.get("/", (req, res) => {
    const message = `Hello from the ${os.hostname()}`
    console.log(message);
    res.send(message)
})

app.listen(4000, () => console.log("App listening on http://localhost:4000"))