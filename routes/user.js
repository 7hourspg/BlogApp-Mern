import express from "express";
import Users from "../models/Userschema.js";

const router = express.Router();
router.get("/", (req, res) => {
  Users.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/register", (req, res) => {
  const { firstName, email, password } = req.body;
  const user = Users({ firstName, email, password });
  user
    .save()
    .then(() => {
      res.send(`Data Reached ${user.firstName}`);
    })
    .catch((err) => {
      res.send('err')
    });
});

router.post("/login", (req, res)=> {
  const { email, password} = req.body
  Users.findOne({ email: email}, (err, user) => {
      if(user){
          if(password === user.password ) {
              res.send({message: "Login Successfull", user: user})
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })
}) 


router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id).then((data) => {
    res.send(data);
  });
});

export default router;
