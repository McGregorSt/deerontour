import React, { useEffect, useState } from 'react'
import DetailsTemplate from '../template/DetailsTemplate'
import { IPost } from '../support/types'
import { BASE_URL } from '../globals/host'

const Tour = () => {
  const [postData, setPostData] = useState<IPost | null>(null)
  const country = window.location.pathname.replace('/tours/details/', '')

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`http://${BASE_URL}/blog/tours/details/${country.toLowerCase()}`, {
        method: 'get',
      })
      const data = await response.json()
      const post = data.post
      setPostData(post)
    }
    fetchPosts()
  }, [country])

  return (
    <>
      {/* <UserPage> */}
        <DetailsTemplate post={postData} />
      {/* </UserPage> */}
    </>
  )
}

export default Tour
