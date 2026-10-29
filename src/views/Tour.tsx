import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import DetailsTemplate from '../template/DetailsTemplate'
import { IPost } from '../support/types'
import { fetchPostByCountry, fetchPosts } from '../support/api'
import { useI18n } from '../i18n/I18nContext'
import UserPage from '../template/UserPage'
import styled from 'styled-components'

const StyledStatus = styled.p`
  width: min(calc(100% - 2.5rem), 50rem);
  margin: 8rem auto 4rem;
  color: #55564f;
  text-align: center;
`

const Tour = () => {
  const [postData, setPostData] = useState<IPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { language, t } = useI18n()
  const { country = '' } = useParams<{ country: string }>()
  const [searchParams] = useSearchParams()
  const postId = searchParams.get('postId')

  useEffect(() => {
    let active = true
    setPostData(null)
    setLoading(true)
    setError(false)

    const loadPost = async () => {
      try {
        const post = postId
          ? (await fetchPosts(language)).find(
            (candidate) => candidate.id === postId && candidate.country.toLowerCase() === country.toLowerCase(),
          ) || null
          : await fetchPostByCountry(country, language)

        if (active) setPostData(post)
      } catch (fetchError) {
        console.error(`Error fetching post for ${country}:`, fetchError)
        if (active) {
          setPostData(null)
          setError(true)
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    loadPost()
    return () => {
      active = false
    }
  }, [country, language, postId])

  return (
    <UserPage>
      {loading ? (
        <StyledStatus>{t('post.loading')}</StyledStatus>
      ) : error ? (
        <StyledStatus role='alert'>{t('post.loadError')}</StyledStatus>
      ) : postData ? (
        <DetailsTemplate post={postData} />
      ) : (
        <StyledStatus>{t('post.notFound')}</StyledStatus>
      )}
    </UserPage>
  )
}

export default Tour
