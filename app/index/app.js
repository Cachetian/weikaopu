const express = require("express");
const app = express();
const port = 3001;

app.get("/", function (req, res) {
    res.sendFile(require("path").join(__dirname, "/index.html"));
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
