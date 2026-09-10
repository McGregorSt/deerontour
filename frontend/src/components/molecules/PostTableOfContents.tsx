import React from 'react'
import styled, { css } from 'styled-components'

const StyledToc = styled.aside`
  position: sticky;
  top: 2rem;
  align-self: start;
  width: min(100%, 260px);
  background: rgba(250, 248, 243, 0.76);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(38, 38, 38, 0.12);
  padding: 1.2rem 1rem 1rem;
  border-radius: 18px;
  box-shadow: 0 18px 45px rgba(16, 24, 40, 0.04);

  @media (max-width: 1080px) {
    position: static;
    width: 100%;
    margin-bottom: 2rem;
  }
`

const TocTitle = styled.p`
  margin: 0 0 1rem;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(28, 28, 28, 0.62);
  font-weight: 700;
`

const TocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-left: 1px solid rgba(34, 34, 34, 0.15);
`

const TocItem = styled.li`
  position: relative;
  margin: 0;
`

const activeItemStyles = css`
  color: #1b1b1b;
  font-weight: 700;

  &::before {
    opacity: 1;
    transform: scaleY(1);
  }
`

const TocButton = styled.button<{ $active?: boolean }>`
  all: unset;
  cursor: pointer;
  display: grid;
  grid-template-columns: 2.2rem minmax(0, 1fr);
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 1rem;
  color: rgba(28, 28, 28, 0.7);
  transition: color 0.2s ease, transform 0.2s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -1px;
    top: 0.25rem;
    bottom: 0.25rem;
    width: 2px;
    background: #1b1b1b;
    opacity: 0;
    transform: scaleY(0.4);
    transform-origin: center;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  &:hover,
  &:focus-visible {
    color: #1b1b1b;
    outline: none;
  }

  ${(props) => props.$active && activeItemStyles}
`

const TocIndex = styled.span`
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: inherit;
`

const TocLabel = styled.span`
  display: block;
  font-size: 0.92rem;
  line-height: 1.35;
  color: inherit;
`

interface TocItemData {
  id: string
  title: string
}

interface PostTableOfContentsProps {
  items: TocItemData[]
  activeId?: string
  onSelect?: (id: string) => void
}

const PostTableOfContents: React.FC<PostTableOfContentsProps> = ({ items, activeId, onSelect }) => {
  const handleClick = (id: string) => {
    if (onSelect) {
      onSelect(id)
      return
    }

    const element = document.getElementById(id)
    if (element) {
      const offset = 110
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  if (items.length === 0) {
    return null
  }

  return (
    <StyledToc>
      <TocTitle>On this page</TocTitle>
      <TocList>
        {items.map((item, index) => (
          <TocItem key={item.id}>
            <TocButton type="button" $active={activeId === item.id} onClick={() => handleClick(item.id)}>
              <TocIndex>{String(index + 1).padStart(2, '0')}</TocIndex>
              <TocLabel>{item.title}</TocLabel>
            </TocButton>
          </TocItem>
        ))}
      </TocList>
    </StyledToc>
  )
}

export default PostTableOfContents
