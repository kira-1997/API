import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Update() {
  const navi=useNavigate()
   const [char,setChar]=useState('')
    let id=localStorage.getItem('id')
     

const saveInput= (e)=>{
    setChar({...char,
        [e.target.name]:e.target.value
       })

}
    
   useEffect(()=>{
        axios.get(`https://65524db75c69a7790329dc3e.mockapi.io/Characters/${id}`)
        .then(res=>{
         setChar(res.data)
        })
        .catch(function(err){
         console.log(err)
        })
    
    },[])

    const handlePut=()=>{
        axios.put(`https://65524db75c69a7790329dc3e.mockapi.io/Characters/${id}`,{
            name: char.name,
            image: char.image,
            hair:char.hair,
            status:char.status,
            species:char.species,
            gender:char.gender,
            origin:char.origin
        })
        .catch(function(err){
            console.log(err)
           })
           navi('/')
           localStorage.clear()   
    }
   
  return (

    
<div className='flex justify-center items-center h-screen bg-[url("https://c4.wallpaperflare.com/wallpaper/646/185/178/style-heroes-style-jdm-wallpaper-preview.jpg")]'>
 <div className=' grid w-96 p-5  gap-5 bg-black/60 rounded-lg'>
 <p className='mx-3 text-blue-600 font-bold text-center text-4xl'>Character info</p>
  <input type="text"  onChange={saveInput} name='name' placeholder='Name' value={char.name} className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='image' placeholder='Image Url' value={char.image} className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='hair' placeholder='Hair' value={char.hair} className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='status' placeholder='Status' value={char.status} className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='species' placeholder='Speices' value={char.species} className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='gender' placeholder='Gender' value={char.gender} className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='origin' placeholder='Origin' value={char.origin} className='border rounded-lg border-2 mx-3'/>

       <button className='font-bold text-xl mx-3 bg-blue-600 rounded-lg text-white' onClick={handlePut}>update</button>
       </div>
        
         


        </div>
  )
}

export default Update