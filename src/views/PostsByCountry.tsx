import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/atoms/Header'
import PostCard from '../components/organisms/PostCard'
import UserPage from '../template/UserPage'
import { useI18n } from '../i18n/I18nContext'
import { fetchPostsByCountry } from '../support/api'
import { IPost } from '../support/types'

const StyledPostsPage = styled.main`
  width: 100%;
  padding: 10rem 5rem 3rem;

  @media (max-width: 768px) {
    padding: 7rem 1rem 2rem;
  }
`

const StyledPostsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 2rem;
  padding: 2rem 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem 0;
  }
`

const StyledMessage = styled.p`
  padding: 1rem 1.5rem;
`

const PostsByCountry: React.FC = () => {
  const [searchParams] = useSearchParams()
  const country = searchParams.get('country')?.trim() || ''
  const { language, t } = useI18n()
  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isCurrentRequest = true

    const loadPosts = async () => {
      setPosts([])
      setError(null)
      if (!country) {
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const fetchedPosts = await fetchPostsByCountry(country, language)
        if (isCurrentRequest) {
          setPosts(fetchedPosts)
        }
      } catch (fetchError) {
        const message = fetchError instanceof Error ? fetchError.message : 'Unknown error'
        console.error(`Error fetching posts for ${country}:`, message)
        if (isCurrentRequest) {
          setError(message)
        }
      } finally {
        if (isCurrentRequest) {
          setLoading(false)
        }
      }
    }

    loadPosts()
    return () => {
      isCurrentRequest = false
    }
  }, [country, language])

  return (
    <UserPage>
      <StyledPostsPage>
        <Header content={`${t('posts.countryTitle')} ${country}`} />
        {loading ? (
          <StyledMessage>{t('posts.loading')}</StyledMessage>
        ) : error ? (
          <StyledMessage role='alert'>
            {t('posts.loadError')} {error}
          </StyledMessage>
        ) : !country ? (
          <StyledMessage>{t('posts.noCountry')}</StyledMessage>
        ) : posts.length === 0 ? (
          <StyledMessage>{t('posts.none')}</StyledMessage>
        ) : (
          <StyledPostsList>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </StyledPostsList>
        )}
      </StyledPostsPage>
    </UserPage>
  )
}

export default PostsByCountry
