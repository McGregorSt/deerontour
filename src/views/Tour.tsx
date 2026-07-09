import React, { useEffect, useState } from 'react'
import DetailsTemplate from '../template/DetailsTemplate'
import { IPost } from '../support/types'
import { fetchPostByCountry } from '../support/api'

const Tour = () => {
  const [postData, setPostData] = useState<IPost | null>(null)
  const country = window.location.pathname.replace('/tours/details/', '')

  useEffect(() => {
    const fetchPosts = async () => {
      const post = await fetchPostByCountry(country)
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
