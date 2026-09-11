import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Profile = () => {
  const [profile,setProfile]=useState(null);  
  const [followers,setFollowers]=useState([]);
  const [unfollow,setUnfollow]=useState(0);

  useEffect(()=>{
     axios.get('http://localhost:3000/profile')
     .then(data=>{setProfile(data.data)})
     .catch(err=>console.log(err))

     axios.get('http://localhost:3000/followers')
     .then(data=>{setFollowers(data.data)})
     .catch(err=>console.log(err))
  },[unfollow])

  function handleonChange(e){
      setProfile(prev=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }

   const handleonUpdate=async()=>{
     axios.put('http://localhost:3000/profile',profile)
     .then(data=>console.log("Updated"))
     .catch(err=>console.log(err))
   }
   
   const handleUnfollow=async(id)=>{
     axios.delete(`http://localhost:3000/followers/${id}`)
     .then(alert("unfollowed"))
     .then(setUnfollow(!unfollow))
     .catch(err=>console.log(err))
   }
  return (
    <div className='m-5'>
      {profile?(
        <div>
          <img src={profile.profilePic} className='profile rounded-circle'/>
          <p>{profile.username}</p>
          <input name="username" value={profile.username} className='form-control my-4' onChange={handleonChange}/>
          <input name="profilePic" value={profile.profilePic} className='form-control my-4' onChange={handleonChange}/> 
          <button className='btn btn-primary my-4'  onClick={handleonUpdate}>Update</button>
        </div>
      ):(
        <div>Loading...</div>
      )}
      {followers.length>0?
      (
        followers.map(follower=>{
          return(
          <div key={follower.id} className='d-flex my-3'>
            <p>{follower.username}</p>
            <button className='btn btn-secondary ms-auto' onClick={()=>{handleUnfollow(follower.id)}}>unfollow</button>
          </div>)
        })
      ):(
      <div>Loading...</div>)
    }
    </div>
  )
} 

export default Profile