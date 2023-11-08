import React from 'react'
import userData from '../userData.json';
import UserList from './UserList';
import UserCategories from './UserCategories';

function UserContainer() {
  return (
    <div>
        <UserCategories />
      <UserList users={userData} />
    </div>
  )
}

export default UserContainer
