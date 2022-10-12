import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import "./Home.css";
import img from "./Images/Publish article-amico.png";
import { NavLink } from "react-router-dom";
import { DataContext } from "./Context/DataContext";
function GroupExample() {
  const {setNewData}=useContext(DataContext)
  
  const [post, setPost] = useState([]);
  const fetch = async () => {
    const res = await axios.get("http://localhost:3001/user/posts");
    setPost(res.data.posts);
  };
  useEffect(() => {
    fetch();
  }, []);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const titlecateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  // console.log(post)
setNewData(post)
  return (
    <div className="home_ctr">
      <div className="top_ctr">
        <div className="left_bx">
          <img src={img} alt="" />
        </div>
        <div className="right_bx">
          <div className="content">
            <h1>
              Publish platform <br /> for professional bloggers
            </h1>
            <button className="button"> Get Started</button>
          </div>
        </div>
      </div>
      <div className="blog_ctr">
        {post.map((item,id) => {
          return (
            <Card key={id} style={{ width: "20rem" }}>
              <Card.Img variant="top" src={`/uploads/${item.img}`} />
              <Card.Body>
                <Card.Title>{titlecateString(item.title, 40)}</Card.Title>
                <Card.Text>{truncateString(item.desc, 150)}</Card.Text>
                <NavLink to={`/article/${item._id}`}>
                  <Button variant="primary">Read More</Button>
                </NavLink>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default GroupExample;
