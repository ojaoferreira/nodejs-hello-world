const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send('Hello World! - v1.0.2'));

app.listen(port, () => console.log("Server is running at port", port));