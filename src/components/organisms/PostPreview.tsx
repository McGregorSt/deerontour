import React from 'react'
import styled from 'styled-components'
import PostCardPhoto from '../atoms/Post/PostCardPhoto'
import PostHeader from '../atoms/Post/PostHeader'
import PostParagraph from '../atoms/Post/PostParagraph'
import { useNavigate } from 'react-router-dom'
import { IPost } from '../../support/types'
import PostTitle from '../atoms/Post/PostTitle'
import PostForwardArrow from '../atoms/Post/PostForwardArrow'

const StyledPostHeader = styled.div``
const StyledPostPreview = styled.div`
  height: 24vh;
  min-width: 63vw;
  /* border: 1px solid #726e6e; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 36px -8px;
  border-radius: 20px;
  /* border: 4px solid #aaa; */

  * {
    background-color: #fff;
    border-radius: 20px 20px 0 0;
  }
  * > span {
    background-color: #fff;
    border-radius: 0;
    font-size: 18px;
  }

  img {
    /* border-radius: 30px; */
    /* height: 50%; */
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
  width: 50%;
  /* background-color: antiquewhite; */
`

const StyledPostCardPhoto = styled.div`
  min-width: 40%;
  /* max-width: 40%; */
  /* background-color: aqua; */

  border: 3px solid gray;
  border-radius: 0%;
  & > * {
    display: flex;
    flex-direction: column;
  }
`

const PostPreview: React.FC<{ post: IPost }> = ({ post }) => {
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent) => {
    navigate(`/tours/details/${post.country.toLowerCase()}`)
  }
  return (
    <StyledPostPreview onClick={(e) => handleClick(e)}>
      <StyledPostCardPhoto><PostCardPhoto imgSrc={post.postGallery || [[{src: ''}]]} /></StyledPostCardPhoto>
      <StyledContent>
        <StyledPostHeader>
          <PostHeader
            author={post.author}
            date={post.createdAt.toString().split('T')[0]} // Wyodrębnienie daty z formatu ISO
          />
        </StyledPostHeader>
        <PostTitle title={post.title} />
        <PostParagraph text={post.textLead} />
        <PostForwardArrow />
      </StyledContent>
    </StyledPostPreview>
  )
}

export default PostPreview
