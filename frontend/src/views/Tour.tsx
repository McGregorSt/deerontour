import React, { useEffect, useState } from 'react'
import DetailsTemplate from '../template/DetailsTemplate'
import { IPost } from '../support/types'
import { fetchPostByCountry } from '../support/api'
import { useI18n } from '../i18n/I18nContext'
import UserPage from '../template/UserPage'

const Tour = () => {
  const [postData, setPostData] = useState<IPost | null>(null)
  const { language } = useI18n()
  const country = window.location.pathname.replace('/tours/details/', '')

  useEffect(() => {
    const fetchPosts = async () => {
      const post = await fetchPostByCountry(country, language)
      setPostData(post)
    }
    fetchPosts()
  }, [country, language])

  return (
    <>
      <UserPage>
        <DetailsTemplate post={postData} />
      </UserPage>
    </>
  )
}

export default Tour
