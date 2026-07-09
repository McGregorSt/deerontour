import React from 'react'
import styled from 'styled-components'
import PostCardPhoto from '../atoms/Post/PostCardPhoto'
import PostHeader from '../atoms/Post/PostHeader'
import PostParagraph from '../atoms/Post/PostParagraph'
import { useNavigate } from 'react-router-dom'
import { IPost } from '../../support/types'
import PostTitle from '../atoms/Post/PostTitle'
import PostForwardArrow from '../atoms/Post/PostForwardArrow'
import PostSubtitle from '../atoms/Post/PostSubtitle'

const StyledPostHeader = styled.div``
const StyledPostCard = styled.div`
  min-height: 36rem;
  width: min(16vw, 280px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 36px -8px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  * {
    background-color: #fff;
    border-radius: 20px 20px 0 0;
  }
  * > span {
    background-color: #fff;
    border-radius: 0;
  }

  img {
  }

  cursor: pointer;

  &:hover {
    opacity: 90%;
  }

  ${StyledPostHeader} {
    font-size: 24px;
    text-transform: uppercase;
  }
`


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 1rem 1rem;
`


const StyledPostCardPhoto = styled.div`
  & > * {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const PostCard: React.FC<{ post: IPost }> = ({ post }) => {
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent) => {
    navigate(`/tours/details/${post.country.toLowerCase()}`)
  }
  return (
    <StyledPostCard onClick={(e) => handleClick(e)}>
      <StyledPostCardPhoto>
        <PostCardPhoto imgSrc={post.postGallery || []} />
      </StyledPostCardPhoto>
      <StyledContent>
        <StyledPostHeader>
          <PostHeader
            author={post.author}
            date={post.createdAt.toString().split('T')[0]} // Wyodrębnienie daty z formatu ISO
          />
        </StyledPostHeader>
        <PostTitle title={post.title} />
        <PostSubtitle title={post.subtitle} />
        <PostParagraph
          text={post.textLead}
          hidden={true}
        />
      </StyledContent>
      <PostForwardArrow />
    </StyledPostCard>
  )
}

export default PostCard
