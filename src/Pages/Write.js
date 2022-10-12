import React, { useState, useEffect } from "react";
import axios from "axios";
import './Write.css'
function Upload() {
  const [name, setname] = useState();
  const [img, setImg] = useState();
  const [other, setOtherData] = useState();
  const [data, setdata] = useState([]);

  const onFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img);
    formData.append("title", name);
    formData.append("desc", other);

    axios
      .post("http://localhost:3001/user/upload", formData, {})
      .then((res) => {
        console.log(res.data.message);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/user").then((res) => {
      return setdata(res.data.users);
    });
  }, []);

  console.log(data);
  return (
    <>
      <div className="write_ctr">
        <form onSubmit={onSubmit}>
          <textarea placeholder="Enter Title" onChange={(e) => setname(e.target.value)} name="text" id="" cols="30" rows="2"/>
          <textarea placeholder="Enter Description" onChange={(e) => setOtherData(e.target.value)} name="desc" id="" cols="30" rows="10"/>
          <input type="file" onChange={onFileChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Upload;
