import React from 'react'

export const Sidebar = () => {
  return (
    <div className='ms-4 position-fixed'>
    <div className='d-flex flex-column gap-3'>
       <img className='logo-text' src='src\assets\insta_text-removebg-preview.png' alt=''></img>
       <div><i className="bi bi-house-door"></i>Home</div>
       <div><i className="bi bi-search"></i>Search</div>
       <div><i className="bi bi-compass"></i>Explore</div>
       <div><i className="bi bi-play-btn"></i>Reels</div>
       <div><i className="bi bi-chat-dots"></i>Messages</div>
       <div><i className="bi bi-heart"></i>Notifications</div>
       <div><i className="bi bi-plus-square"></i>Create</div>
       <div><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i className="bi bi-list"></i>More</div>
    </div>
    </div>
  )
}
