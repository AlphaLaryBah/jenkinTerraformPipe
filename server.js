/** @format */

const express = require("express");

// Constants
const PORT = 8081;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
	res.send("Hello World not today");
});

app.get("/2", (req, res) => {
	res.send("I like to see great things");
});

app.listen(PORT, HOST, () => {
	console.log(`Running on http://${HOST}:${PORT}`);
});
