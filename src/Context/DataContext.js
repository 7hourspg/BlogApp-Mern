import React,{createContext,useState,useEffect} from 'react'
export const DataContext=createContext()
export const DataContextProvider=({children})=>{
   
    const [newData, setNewData] = useState(JSON.parse(localStorage.getItem("is-data")) ||[]);
   
    
    return(
        <DataContext.Provider value={{setNewData,newData}} >
            {children}
        </DataContext.Provider>
    )
}