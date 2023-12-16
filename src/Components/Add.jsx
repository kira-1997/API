import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Add() {

   
    const [data, setData]=useState({
        name:'',
        img:'',
        hair:'',
        stat:'',
        species:'',
        gender:'',
        origin:''
})
   
const saveInput= (e)=>{
    setData({...data,
     [e.target.name]:e.target.value
    })}

    const handleTask=()=>{
        axios.post('https://65524db75c69a7790329dc3e.mockapi.io/Characters',{
         name: data.name,
         image: data.img,
         hair:data.hair,
         status:data.stat,
         species:data.species,
         gender:data.gender,
         origin:data.origin
        })
        .then(()=>{
        })
        .catch(function(err){
         console.log(err)
        })
    }




 

return (
<div className='flex justify-center items-center h-screen bg-[url("https://c4.wallpaperflare.com/wallpaper/646/185/178/style-heroes-style-jdm-wallpaper-preview.jpg")]'>
 <div className=' grid w-96 p-5  gap-5 bg-black/60 rounded-lg'>
 <p className='mx-3 text-blue-600 font-bold text-center text-4xl'>Character info</p>
  <input type="text"  onChange={saveInput} name='name' placeholder='Name' className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='img' placeholder='Image Url' className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='hair' placeholder='Hair' className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='stat' placeholder='Status' className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='species' placeholder='Speices' className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='gender' placeholder='Gender' className='border rounded-lg border-2 mx-3'/>
  <input type="text"  onChange={saveInput}  name='origin' placeholder='Origin' className='border rounded-lg border-2 mx-3'/>

  <button onClick={handleTask} className='font-bold text-xl mx-3 bg-blue-600 rounded-lg text-white'>Add Char</button>
  <Link  to={'/'} className='font-bold text-xl mx-3 bg-blue-600 text-center rounded-lg text-white'>Home</Link>

  
  </div>
        
         


 </div>
)
}

export default Add