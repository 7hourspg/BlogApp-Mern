import axios from "axios";
import React, { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import "./Articel.css";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Articel() {
  const {newData}=useContext(DataContext)
  const { id } = useParams();
  const [data, setData] = useState([]);

  const singleData = async () => {
    const data = await axios.get(`http://localhost:3001/user/${id}`);
    setData(data.data);
  };

  useEffect(() => {
    singleData();
    localStorage.setItem('is-data', JSON.stringify(newData));

  }, [id]);

  // side Data
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
 
  return (
    <>
      <div className="article_ctr" >
        <div className="inner_ctr" >
          <h1>{data.title}</h1>
          <div className="imgbx">

          <img src={`/uploads/${data.img}`} alt="" />
          </div>
          <p className="desc">{data.desc}</p>
        </div>
        <div className="inner_ctr2">
          <h2>Similar Posts</h2>
          {newData?.map((item) => {
            if(item._id===id){}
            else{
              return (
            <Card key={item._id} style={{ width: "20rem" }}>
              <Card.Img variant="top" src={`/uploads/${item.img}`} />
              <Card.Body>
                <Card.Title>{titlecateString(item.title, 40)}</Card.Title>
                <Card.Text>{truncateString(item.desc, 150)}</Card.Text>
                <NavLink  to={`/article/${item._id}`}>
                  <Button variant="primary">Read More</Button>
                </NavLink>
              </Card.Body>
            </Card>
          );
            }
         
        })}
        </div>
      </div>
    </>
  );
}

export default Articel;
