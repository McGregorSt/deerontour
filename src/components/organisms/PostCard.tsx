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
  min-height: 38rem;
  width: min(18vw, 380px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 36px -8px; */
  /* border-radius: 20px; */
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: rgba(57, 56, 56, 0.1) 0px 20px 36px -20px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  z-index: 990;
  
  &:hover {
    z-index: 990;
    box-shadow: rgba(57, 56, 56, 0.5) 0px 20px 36px -20px;
    transform: translateY(-2px);
  }

  * {
    background-color: #fff;
    /* border-radius: 20px 20px 0 0; */
  }
  * > span {
    background-color: #fff;
    border-radius: 0;
  }

  img {
  }

  cursor: pointer;

  ${StyledPostHeader} {
    font-size: 24px;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    height: 20rem;
    width: 300px;
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
    /* width: 100%; */
  }
`

const PostCard: React.FC<{ post: IPost }> = ({ post }) => {
  const navigate = useNavigate()

  const [mouseEnter, setMouseEnter] = React.useState(false)

  const handleClick = (e: React.MouseEvent) => {
    navigate(`/tours/details/${post.country.toLowerCase()}`)
  }
  return (
    <StyledPostCard onClick={(e) => handleClick(e)} onMouseEnter={(e) => setMouseEnter(true)} onMouseLeave={(e) => setMouseEnter(false)} >
    {/* <StyledPostCard onClick={(e) => handleClick(e)} onMouseEnter={() => setMouseEnter(!mouseEnter)} > */}
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
      <PostForwardArrow mouseEnter={mouseEnter}/>
    </StyledPostCard>
  )
}

export default PostCard
