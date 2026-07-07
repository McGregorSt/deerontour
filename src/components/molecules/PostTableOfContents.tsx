import React from 'react'
import styled from 'styled-components'

const StyledToc = styled.aside`
 background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: left;
  border: 1px solid #ddd;
  margin-top: 3vh;
  padding: 20px 40px;
  position: fixed;
  left: 20px;
  width: 18vw;
  z-index: 990;

  @media (max-width: 1200px) {
    display: none;
  }
`

const TocTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 1rem;
  line-height: 1.3;
  letter-spacing: 0.01em;
  color: #2b2b2b;
`

const TocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const TocItem = styled.li`
  margin-bottom: 10px;
`

const TocButton = styled.button`
  all: unset;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: left;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.4;
  padding: 6px 8px;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover,
  &:focus {
    background: #f0f0f0;
    color: #111;
    outline: none;
  }
`

interface TocItemData {
  id: string
  title: string
}

interface PostTableOfContentsProps {
  items: TocItemData[]
}

const PostTableOfContents: React.FC<PostTableOfContentsProps> = ({ items }) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (items.length === 0) {
    return null
  }

  return (
    <StyledToc>
      <TocTitle>Przejdź do:</TocTitle>
      <TocList>
        {items.map(item => (
          <TocItem key={item.id}>
            <TocButton type="button" onClick={() => handleClick(item.id)}>
              {item.title}
            </TocButton>
          </TocItem>
        ))}
      </TocList>
    </StyledToc>
  )
}

export default PostTableOfContents
