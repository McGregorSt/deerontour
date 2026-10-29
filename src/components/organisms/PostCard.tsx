import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PostCardPhoto from '../atoms/Post/PostCardPhoto'
import PostHeader from '../atoms/Post/PostHeader'
import PostForwardArrow from '../atoms/Post/PostForwardArrow'
import PostSubtitle from '../atoms/Post/PostSubtitle'
import PostTitle from '../atoms/Post/PostTitle'
import { IPost } from '../../support/types'
import { useI18n } from '../../i18n/I18nContext'

const fallbackImage = '/assets/6761b2f4d2ca643ca99c2d90/header.jpg'

const StyledPostCard = styled(Link)<{ $variant: 'default' | 'grid' }>`
  position: relative;
  display: flex;
  width: clamp(260px, 30vw, 380px);
  min-height: 31rem;
  flex: 0 0 auto;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  color: #292a24;
  text-decoration: none;
  transition: box-shadow 180ms ease, transform 180ms ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(35, 37, 26, 0.13);
    transform: translateY(-2px);
  }

  &:hover > div:last-child {
    transform: translateX(5px);
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
  }

  & > div:first-child img {
    width: 100%;
    height: clamp(13rem, 19vw, 17rem);
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: min(80vw, 340px);
    min-height: 29rem;

    & > div:first-child img {
      height: 15rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  ${({ $variant }) => $variant === 'grid' && `
    width: 100%;
    min-height: 0;
    flex: initial;
    box-shadow: 0 2px 12px rgba(35, 37, 26, 0.06);

    & > div:first-child img {
      height: 13.5rem;
    }

    @media (max-width: 600px) {
      width: 100%;
      min-height: 0;

      & > div:first-child img {
        height: 12.5rem;
      }
    }
  `}
`

const StyledContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.65rem 1rem 2.5rem;

  & > div:first-child {
    margin: 0 0 0.35rem;
  }
`

const StyledExcerpt = styled.p`
  display: -webkit-box;
  overflow: hidden;
  margin: 0.4rem 0 0;
  color: #65665f;
  font-size: 0.88rem;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`

const PostCard: React.FC<{ post: IPost; variant?: 'default' | 'grid' }> = ({ post, variant = 'default' }) => {
  const { language } = useI18n()
  const postPath = `/tours/details/${encodeURIComponent(post.country.toLowerCase())}?postId=${encodeURIComponent(post.id)}`

  return (
    <StyledPostCard to={postPath} $variant={variant}>
      <PostCardPhoto
        imgSrc={post.postGallery?.length ? post.postGallery : [[{ src: post.imageUrl }]]}
        alt={post.title}
        fallbackSrc={fallbackImage}
      />
      <StyledContent>
        <PostHeader
          author={post.author}
          date={new Date(post.createdAt).toLocaleDateString(language === 'PL' ? 'pl-PL' : 'en-GB')}
        />
        <PostTitle title={post.title} />
        {post.subtitle && <PostSubtitle title={post.subtitle} />}
        {post.textLead && <StyledExcerpt>{post.textLead}</StyledExcerpt>}
      </StyledContent>
      <PostForwardArrow mouseEnter={false} />
    </StyledPostCard>
  )
}

export default PostCard
