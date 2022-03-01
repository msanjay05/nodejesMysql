const express = require("express");
const router = new express.Router();
const User = require("../Models/User");

//create user
router.post("/users", async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      age: req.body.age,
      email: req.body.email,
    });
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send({ error: "some of the fields are invalid" });
  }
});

//get all users
router.get("/users", async (req, res) => {
  try {
    const user = await User.findAll();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send();
  }
});

//get users by id
router.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findAll({ where: { id: id } });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: "not found" });
  }
});

router.patch("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findAll({ where: { id: id } });
    if (req.body.username) {
      user.username = req.body.username;
    }
    if (req.body.age) {
      user.age = req.body.age;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    await User.update(
      { username: user.username, age: user.age, email: user.email },
      {
        where: {
          id: id,
        },
      }
    );
    res.send({ message: "Updated successfully" });
  } catch (e) {
    res.status(400).send({ error: "can't update some of the fields are invalid" });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if(user==0){
      return res.status(404).send({error:`user with id ${req.params.id} not found `});
    }
    res.send({ message: "deleted successfully" });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
