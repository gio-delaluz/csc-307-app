import express from "express";
import cors from "cors";

/*
Notes:
    - Express will work as an HTTP middleware dispatching HTTP requests to receiving and sending calls
*/

const app = express();
const port = 8000;

app.use(cors());
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

// .filter iterrates through an array and appends the items that satisfy the condition
const findUserByName = (name) => {
    return users["users_list"].filter(
      (user) => user["name"] === name
    );
  };

const findUserById = (id) =>
    users["users_list"].find((user) => user["id"] === id);

const findUserbyNameandJob = (name, job) => {
    return users["users_list"].filter(
      (user) => (user["name"] === name && user["job"] === job)
    );
};

const deleteUserById = (id) => {
  // findIndex finds the first instance and returns -1 if false
  const index = users["users_list"].findIndex((user) => user["id"] === id);
  if (index === -1) {
    return false;
  } else {
    users["users_list"].splice(index, 1);
    return true;
  }
};

const addUser = (user) => {
    users["users_list"].push(user);
    return user;
  };
  
// Setting up an endpoint w/ app.get
app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.get("/users", (req, res) => {
    const name = req.query.name;
    const job = req.query.job;

    if (name != undefined & job != undefined){
      let result = findUserbyNameandJob(name, job);
      result = { users_list : result};
      res.send(result);
    } else if (name != undefined) {
      let result = findUserByName(name);
      result = { users_list: result };
      res.send(result);
    } else {
      res.send(users);
    }
});

app.get("/users/:id", (req, res) => {
    const id = req.params["id"]; //or req.params.id
    let result = findUserById(id);
    if (result === undefined) {
      res.status(404).send("Resource not found.");
    } else {
      res.send(result);
    }
  });

app.post("/users", (req, res) => {
    const userToAdd = req.body;
    addUser(userToAdd);
    res.send();
});

app.delete('/users/:id', (req, res) => {
    const id = req.params["id"];
    const success = deleteUserById(id);
    if (success) {
      res.status(200).send(`User with id ${id} deleted successfully.`);
    } else {
      res.status(404).send("User not found.");
    }
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});