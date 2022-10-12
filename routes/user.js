import express from "express";
import multer from "multer";
// import Post from "../models/userschema.js";
import Post from "../models/posts.js";
import User from "../models/userschema.js";
import mongoose from "mongoose";
// import router from "express";
const router = express.Router();
const DIR = "../client/public/uploads";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, Date.now() + "-" + fileName);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
// User model
// let User = require("../models/User");
router.post("/upload", upload.single("img"), (req, res, next) => {
  // const url = req.protocol + "://" + req.get("host");
  const post = new Post({
    
    title: req.body.title,
    desc :req.body.desc,
    img: req.file.filename
  });
  post
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Posted successfully!",
        userCreated: {
          _id: result._id,
          profileImg: result.img,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});
router.get("/posts", (req, res, next) => {
  Post.find().then((data) => {
    res.status(200).json({
      message: "Data  list retrieved successfully!",
      posts: data,
    });
    
  });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Post.findById(id).then((data) => {
    res.send(data);
  });
});

// checking login 
router.post("/login", (req, res)=> {
  const { email, password} = req.body
  User.findOne({ email: email}, (err, user) => {
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

router.post("/register", (req, res) => {
  const { firstName, email, password } = req.body;
  const user = User({ firstName, email, password });
  user
    .save()
    .then(() => {
      res.send(`Data Reached ${user.firstName}`);
    })
    .catch((err) => {
      res.send(err)
    });
});

router.get("/", (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
