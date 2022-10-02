import React, { useState } from "react";
import "./App.css";
function App() {
  
  const [name, setName] = useState(null);
  const [desc, setDesc] = useState(null);
  const [newData, setNewData] = useState(JSON.parse(localStorage.getItem("is-data")) ||[]);
 

  // Adding TODO

  let status=false
  const addTodo = () => {
    if (name === null || desc===null) {
      return
    }
    let id = newData.length + 1;
    setNewData([...newData, { name, desc, id,status }]);
    localStorage.setItem('is-data', JSON.stringify([...newData, { name, desc, id,status }]));
  };

  //Deleting ToDO
  
  const handleDelte = (id) => {
    const updateditems = newData.filter((elem, ind) => {
      return ind !== id;
    });
    setNewData(updateditems);
    localStorage.setItem('is-data', JSON.stringify(updateditems));
  };

// Completed TODO

  const handleComplete = (id) => {
   setNewData(newData.map((item,ind)=>{
      if (ind===id){
        return {...item,status:!status}
      }
      return item 
    }))
  };

  return (
    <>
      <div className="container">
        <div className="head-text">
          <h1>My Todos</h1>
        </div>
        <div className="todo-ctr">
          <div className="todo-header">
            <div className="detail_box">
              <div className="name_box">
                <h2 style={{ color: "white" }}>Name</h2>
                <input onChange={(e) => setName(e.target.value)} type="text" />
              </div>
              <div className="desc_box">
                <h2 style={{ color: "white" }}>Description</h2>
                <input onChange={(e) => setDesc(e.target.value)} type="text" />
              </div>
              <div className="todo_btn">
                <button onClick={addTodo}>Add Todo</button>
              </div>
            </div>
          </div>
        </div>
        <div className="task_ctr">
          {newData.map((data, ind) => {
            return (
              <div className="task_box" key={data.id}>
                <div className="task_bxlft">
                  <h3>
                   {data.name} {data.status && < hr />}
                  </h3>

                  <p>{data.desc}</p>
                </div>
                <div className="task_bxrht">
               
                    <button onClick={()=>handleComplete(ind)} className="complete">
                    {
                      data.status? 'Done':'Complete'
                    }
                      
                    </button>
              

                  <button onClick={() => handleDelte(ind)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
