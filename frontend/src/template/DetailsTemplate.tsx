import React, { useEffect } from 'react'
import PostHeader from '../components/atoms/Post/PostHeader'
import { Link } from 'react-router-dom'
import Post from '../components/organisms/Post'
import { IPost } from '../support/types'
import Gallery from '../components/organisms/PostGallery'
import styled from 'styled-components'
import Paragraph from '../components/atoms/Paragraph'
import UserPage from './UserPage'


const StyledDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DetailsTemplate: React.FC<{ post: IPost | null }> = ({ post }) => {
  return (
    <>
      {post && (
        <UserPage>
          <StyledDetailsWrapper>
            <Post post={post} />
            <>
              <Link to='/tours'>go back</Link>
            </>
          </StyledDetailsWrapper>
        </UserPage>
      )}
    </>
  )
}

export default DetailsTemplate
