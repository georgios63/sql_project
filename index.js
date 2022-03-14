const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4000;

app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;

  const users = await User.findByPk(userId); // { name, phone, email, ... }
  res.send(users);
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
