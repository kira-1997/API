import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import {useEffect} from 'react'
import axios from 'axios'

function More() {
    const {id} =useParams();
    const [img,setImg]=useState([])
   

    useEffect(()=>{
  
     axios.get(`https://finalspaceapi.com/api/v0/character/${id}`)
     .then(res=>{
      setImg(res.data)
     })
     .catch(function(err){
      console.log(err)
     })
    },[])

 

 
  return (
    <div className='grid justify-center items-center bg-no-repeat h-full w-full bg-cover bg-[url("https://rare-gallery.com/mocahbig/81228-final-space-tv-shows-netflix-hd-4k.jpg")]'>
        <div className='grid my-5 justify-center items-center  font-serif text-center font-bold bg-black/60 h-50 w-96 h-fit p-2 rounded-xl shadow-xl'>
        <img className='h-96  w-96 shadow-2xl  rounded-full transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  duration-300' src={img.img_url}/>
            <div className='my-5 text-white'>
            <h1 className='text-2xl text-blue-400  drop-shadow-lg '>Name: {img.name}</h1>
            <h1 className='m-3 my-7 text-xl  drop-shadow-md'>Status: {img.status}</h1>
            <h1 className='m-3 my-7 text-xl drop-shadow-md'>Species: {img.species}</h1>
            <h1 className='m-3 my-7 text-xl drop-shadow-md'>Gender: {img.gender}</h1>
            <h1 className='m-3 my-7 text-xl  drop-shadow-md'>Origin: {img.origin}</h1>
             
            
       
          </div>
         </div>
         </div>
  )
}

export default More