import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Stories = () => {
  const navigate=useNavigate();
  const [stories,setStories]=useState([]);
  let tot=0;
  useEffect(()=>{
    fetch("http://localhost:3000/story")
    .then((data)=>{return data.json()})
    .then((data)=>setStories(data))
    .catch(err=>console.log(err));
  },[])
  return (
    <div className='story d-flex'>
      <div className='d-none'>
      {tot=stories.length}
      </div>
      {stories.length>0 ?(
           stories.map((story)=>(
            <div key={story.id} className='mx-1' onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
              <div className='gradient-border'>
              <img src={story.user.profilePic}></img>
              </div>
              <p className='text-truncate' style={{width:"50px"}}>{story.user.username}</p>
            </div>
      ))
      ):(
        <p>Loading...</p>
      )}
      </div>
  )
}

export default Stories