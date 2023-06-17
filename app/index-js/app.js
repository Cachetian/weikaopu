const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.sendFile(require("path").join(__dirname, "/index.page.html"));
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
