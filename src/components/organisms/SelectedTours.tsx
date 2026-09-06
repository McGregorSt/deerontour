import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import PostCard from './PostCard'
import { IPost } from '../../support/types'
import { fetchPostsByContinentNoMock } from '../../support/api'
import Header from '../atoms/Header'
import PostPreview from './PostPreview'
import UserPage from '../../template/UserPage'

const StyledSelectedTours = styled.div`
  width: 100%;
  padding: 10rem 0 3rem 5rem;

  @media (max-width: 768px) {
    padding: 7rem 0 2rem 2rem;
  }
`
const StyledWrapper = styled.div`
  width: 100%;
  padding: 2rem 1.5rem 3rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: flex-start;
  overflow-x: auto;
  white-space: nowrap;
  align-items: stretch;
  padding-right: 5rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem 2rem;
    flex-direction: row;
    white-space: nowrap;
    overflow-x: auto;
    gap: 2rem;
  }

  @media (max-width: 768px) {
  }
`

const SelectedTours = () => {
  const [postsData, setPostsData] = useState<IPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { continent } = useParams<{ continent: string }>()
  console.log(postsData)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)
        if (!continent) {
          setError('No continent provided')
          setPostsData([])
          return
        }

        const fetched = await fetchPostsByContinentNoMock(continent)
        setPostsData(fetched || [])
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load tours'
        console.error('Error fetching tours:', errorMessage)
        setError(errorMessage)
        setPostsData([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [continent])

  console.log('selected posts data:', postsData)

  if (error) {
    return (
      <StyledWrapper>
        <Header content={`Posts from ${continent}`} />
        <StyledSelectedTours>
          <div style={{ gridColumn: '1 / -1', color: 'red', textAlign: 'center' }}>Error loading tours: {error}</div>
        </StyledSelectedTours>
      </StyledWrapper>
    )
  }

  if (loading) {
    return (
      <StyledWrapper>
        <Header content={`Posts from ${continent}`} />
        <StyledSelectedTours>
          <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Loading tours...</div>
        </StyledSelectedTours>
      </StyledWrapper>
    )
  }

  return (
    <UserPage>
      <StyledSelectedTours>
        <Header content={`Posts from ${continent}`} />
        <StyledWrapper>
          {postsData && postsData.length > 0 ? (
            postsData.map((post: IPost, index: number) => (
              <PostCard
                key={index}
                post={post}
              />
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>No tours found for this continent.</div>
          )}
        </StyledWrapper>
      </StyledSelectedTours>
    </UserPage>
  )
}

export default SelectedTours
