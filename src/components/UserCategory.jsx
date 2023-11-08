import React from 'react'
import './UserCategory.css'

function UserCategory({category, svg}) {
  return (
    <span className='user-category'>{category} {svg}</span>
  )
}

export default UserCategory;
