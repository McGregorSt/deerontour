import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPost } from '../../support/types'
import PostHeader from '../atoms/Post/PostHeader'
import PostParagraph from '../atoms/Post/PostParagraph'
import styled from 'styled-components'
import PostTitle from '../atoms/Post/PostTitle'
import PostGallery from './PostGallery'
import PostLead from '../atoms/Post/PostLead'
import PostTableOfContents from '../molecules/PostTableOfContents'
import { BASE_URL } from '../../globals/host'

const StyledPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledPostContainer = styled.div`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding-left: 0;
  }
`

const StyledPost = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  margin-top: 3vh;
  padding: 20px 40px;
  min-width: 520px;
`

const StyledPostSection = styled.section`
  width: 100%;
  scroll-margin-top: 110px;
  margin-bottom: 40px;
`

const Post: React.FC<{ post?: IPost }> = ({ post: initialPost }) => {
  const { country } = useParams<{ country: string }>()
  const [post, setPost] = useState<IPost | null>(initialPost || null)
  const [loading, setLoading] = useState(!initialPost)
  const [error, setError] = useState<string | null>(null)

  const postGalleryImages = (post?.postGallery ?? []).map((item) =>
    typeof item === 'string' ? { src: item } : item,
  )
  const postGalleryFlat = postGalleryImages.flat()

  useEffect(() => {
    if (initialPost) {
      return
    }

    if (!country) {
      setError('No country provided')
      setLoading(false)
      return
    }

    const fetchPost = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`http://${BASE_URL}/blog/tours/details/${country?.toLowerCase()}`, {
          method: 'get',
        })
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        const data = await response.json()
        console.log('fetched post data:', data)
        setPost(data)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load post'
        console.error('Error fetching post:', errorMessage)
        setError(errorMessage)
        setPost(null)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [country, initialPost])

  if (error) {
    return (
      <StyledPost>
        <div style={{ color: 'red', textAlign: 'center' }}>Error loading post: {error}</div>
      </StyledPost>
    )
  }

  if (loading) {
    return (
      <StyledPost>
        <div style={{ textAlign: 'center' }}>Loading post...</div>
      </StyledPost>
    )
  }

  if (!post) {
    return (
      <StyledPost>
        <div style={{ textAlign: 'center' }}>Post not found</div>
      </StyledPost>
    )
  }

  const tocItems = post.textParagraphs.map((paragraph, index) => ({
    id: `paragraph-${index}`,
    title: paragraph.paragraphLead,
  }))

  const slicedImages = (index: number) => {
    if (Array.isArray(postGalleryImages[index])) {
      return (postGalleryImages[index] as any) || []
    }
    return postGalleryFlat
  }

  return (
    <StyledPostWrapper>
      <PostTableOfContents items={tocItems} />
      <StyledPostContainer>
        <StyledPost>
          <PostHeader
            author={post.author}
            date={post.createdAt.toString().split('T')[0]} // Wyodrębnienie daty z formatu ISO
          />
          <PostTitle title={post.title} />
          <PostLead leadText={post.textLead} />
          {post.textParagraphs.map((paragraph, index) => (
            <StyledPostSection
              id={tocItems[index].id}
              key={tocItems[index].id}
            >
              <PostLead leadText={paragraph.paragraphLead} />
              {paragraph.paragraphText &&
                paragraph.paragraphText.map((textPart: string, textIndex: number) => (
                  <PostParagraph
                    key={`${tocItems[index].id}-${textIndex}`}
                    text={textPart}
                    hidden={false}
                  />
                ))}
              <PostGallery
                imagesToDisplay={slicedImages(index)}
                imagesArr={postGalleryFlat}
              />
            </StyledPostSection>
          ))}
          <hr />
        </StyledPost>
      </StyledPostContainer>
    </StyledPostWrapper>
  )
}

export default Post
