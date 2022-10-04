import React,{useContext} from 'react'
import { globalContext } from './App'
import './Home.css'
function Home() {
    const {name}=useContext(globalContext)
    console.log(name);
  return (
    <div className="home_ctr">
        <div className="inner_box">
            <h1>Welcome ❤️</h1>
            <h2> {name?.firstName} 🫡</h2>
        </div>
    </div>
  )
}

export default Home