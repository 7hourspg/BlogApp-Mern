import React, { useState, useEffect } from "react";
import axios from "axios";
function Upload() {
  const [name, setname] = useState();
  const [profileImg, setprofileImg] = useState();
  const [other, setOtherData] = useState();
  const [data, setdata] = useState([]);

  const onFileChange = (e) => {
    setprofileImg(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", profileImg);
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
    <div className="container">
      <div className="row">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              placeholder="name"
              type="text"
              name="name"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              placeholder="other"
              type="text"
              name="other"
              onChange={(e) => setOtherData(e.target.value)}
            />
            <input type="file" onChange={onFileChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
        {data.map((item,i) => {
          return (
           
              <div className="" key={i}>
                <p>{item.name}</p>
                <p>{item._id}</p>
                <p>{item._other}</p>
                <p>{item.time}</p>
                <img src={`/uploads/${item.profileImg}`} width='500px' alt="" />
              </div>
           
          );
        })}
      </div>
    </div>
  );
}
export default Upload;
