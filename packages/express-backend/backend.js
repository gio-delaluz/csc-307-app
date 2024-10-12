import express from "express";

/*
Notes:
    - Express will work as an HTTP middleware dispatching HTTP requests to receiving and sending calls
*/

const app = express();
const port = 8000;

app.use(express.json());

// Setting up an endpoint w/ app.get
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});