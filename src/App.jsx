import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [count, setCount] = useState([])
  const data = async() =>{
    await axios.get('https://dummyjson.com/carts/1')
    .then((res)=>{
         setCount(res.data.products)
      
    })
  }
 useEffect(()=>{
   data()
 },[])
  console.log(count);
  
 
  return (
    <>
       <h1>hello my first deploying site </h1>
       {Array.isArray(count) && count?.map((item)=>{
           return(
             <img key={item.id} src={item.thumbnail} alt="" />
          
           )
       })
       }
    </>
  )
}

export default App
