import React, { useContext } from 'react'
import UserContext from '../Context/usercontext'


function Profile() {
    const {user}= useContext(UserContext)
 
    
      if(!user) return <p>plz login</p>
      
      return <p>welcome {user.username}</p>
  
  
}

export default Profile
