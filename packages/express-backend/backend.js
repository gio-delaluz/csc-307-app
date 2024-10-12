import express from "express";

/*
Notes:
    - Express will work as an HTTP middleware dispatching HTTP requests to receiving and sending calls
*/

const app = express();
const port = 8000;

app.use(express.json());

const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspiring actress" 
      },
      {
        id: "zap555",
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };
  
// Setting up an endpoint w/ app.get
app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.get("/users", (req, res) => {
    res.send(users);
  });

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});