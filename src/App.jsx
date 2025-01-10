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
    await axios.get('http://localhost:4000/')
    .then((res)=>{
      setCount1(res.data)
   
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
             <img key={item.id} src={item.thumbnail} alt="" />
          
           )
       })
       },
        <h1>{count1.name}</h1>
    </>
  )
}

export default App
