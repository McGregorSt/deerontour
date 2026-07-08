import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import PostCard from './PostCard'
import { IPost } from '../../support/types'
import Header from '../atoms/Header'
import PostPreview from './PostPreview'
import UserPage from '../../template/UserPage'
import { BASE_URL } from '../../globals/host'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2vh;
  grid-gap: 2vw;
  `
const StyledSelectedTours = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 3vw;
  padding-top: 3vw;

  &::-webkit-scrollbar {
    display: none;
  }
`

const SelectedTours = () => {
  const [postsData, setPostsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { continent } = useParams<{ continent: string }>()
  console.log(postsData)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`http://${BASE_URL}/blog/tours/${continent}`, {
          method: 'get',
        })
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        const data = await response.json()
        const { posts } = data
        console.log('selected tours data:', posts)
        setPostsData(posts || [])
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
        <Header content='Recent posts' />
        <StyledSelectedTours>
          <div style={{ gridColumn: '1 / -1', color: 'red', textAlign: 'center' }}>Error loading tours: {error}</div>
        </StyledSelectedTours>
      </StyledWrapper>
    )
  }

  if (loading) {
    return (
      <StyledWrapper>
        <Header content='Recent posts' />
        <StyledSelectedTours>
          <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Loading tours...</div>
        </StyledSelectedTours>
      </StyledWrapper>
    )
  }

  return (
    <UserPage>
      <StyledSelectedTours>
      <Header content='Recent posts' />
        <StyledWrapper>
          {postsData && postsData.length > 0 ? (
            postsData.map((post: IPost, index: number) => (
              <PostPreview
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
