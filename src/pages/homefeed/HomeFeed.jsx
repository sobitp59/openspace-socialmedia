import React from 'react'
import CreatePost from '../../components/createpost/CreatePost'

const HomeFeed = () => {
  return (
    <div>
        <CreatePost />
        <ul>
            <li>post 1</li>
            <li>post 2</li>
            <li>post 3</li>
            <li>post 4</li>
            <li>post 5</li>
        </ul>
    </div>
  )
}

export default HomeFeed