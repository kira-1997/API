import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
    const [char,setChar]=useState([])

     
    const deleteItem=(id)=>{
      axios.delete(`https://65524db75c69a7790329dc3e.mockapi.io/Characters/${id}`)
        .then(()=>{
          getData()
      })
      
  }
    
      const getData=()=>{
        axios.get(`https://65524db75c69a7790329dc3e.mockapi.io/Characters`)
        .then(res=>{
         setChar(res.data)
        })
        .catch(function(err){
         console.log(err)
        })
       }

  
    useEffect(()=>{
    
      getData()
      },[])
    
      return (
        
      <div className='m-5'>
                <Link to={'/Add'} className='rounded-lg text-4xl p-2 font-bold bg-blue-900 text-white ' >Add Char</Link>

      <div className=' grid  grid-cols-4 gap-2  p-5  '>
              {char.map((items)=>{
                return <>
                     <div key={char.id} className='grid p-14 rounded-xl bg-blue-100 '>
                     <img className='w-70  h-44 rounded-xl  border-gray-600 hover:border-none  shadow-lg  hover:text-white transition  ease-in-out hover:-translate-y-1 hover:scale-110  duration-300' src={items.image}  />
                     <h1 className='m-3 my-7 text-xl  drop-shadow-md'>Name: {items.name}</h1>
                     <h1 className='m-3 my-7 text-xl  drop-shadow-md'>Status: {items.status}</h1>
                    <h1 className='m-3 my-7 text-xl drop-shadow-md'>Species: {items.species}</h1>
                    <h1 className='m-3 my-7 text-xl drop-shadow-md'>Gender: {items.gender}</h1>
                   <h1 className='m-3 my-7 text-xl  drop-shadow-md'>Origin: {items.origin}</h1>
                   <h1 className='m-3 my-7 text-xl  drop-shadow-md'>Hair: {items.hair}</h1>
                   <div >
                   <Link to={'/Update'} className='font-serif bg-black  text-white mx-12 rounded-xl p-1 font-bold m-3' onClick={()=> localStorage.setItem('id',items.id)}>Update</Link>
                   <button className='font-serif bg-black  text-white mx-12 rounded-xl p-1 font-bold m-3' onClick={()=> deleteItem(items.id)}>Delete</button>   
                   </div>
                   </div>
                </>
              })
    
              }
             
           
            </div>
            </div>
      )
    }

export default Home