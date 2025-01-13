import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [count, setCount] = useState([])
  const [count1, setCount1] = useState([])
  const data = async() =>{
    await axios.get('https://dummyjson.com/carts/1')
    .then((res)=>{
         setCount(res.data.products)
      
    })
    await axios.get('https://server-tu20.onrender.com/hello')
    .then((res)=>{
      setCount1(res.data.data)
    
   
 })
  }
 useEffect(()=>{
   data()
 },[])
 console.log(count1);
  
 
  return (
    <>
       <h1>hello my first deploying site </h1>
       {Array.isArray(count) && count?.map((item)=>{
           return(
             <img key={item.id} src={item.thumbnail}  alt="" />
          
           )
       })
       },
       {count1?.map((item)=>{
        return <h1 key={item._id}>{item.name}</h1>
       })}
    </>
  )
}

export default App
