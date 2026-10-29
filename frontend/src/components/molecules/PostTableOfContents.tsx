import React from 'react'
import styled, { css } from 'styled-components'
import { useI18n } from '../../i18n/I18nContext'

const StyledToc = styled.aside`
  width: 100%;
  background: #fff;
  border: 1px solid rgba(38, 38, 32, 0.1);
  padding: 1.1rem 1rem;
  align-self: start;
`

const StyledMobileToc = styled.details`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 0 0 1.5rem;
    border-top: 1px solid rgba(38, 39, 32, 0.13);
    border-bottom: 1px solid rgba(38, 39, 32, 0.13);

    &[open] > summary::after {
      transform: rotate(225deg);
    }
  }
`

const MobileTocSummary = styled.summary`
  display: flex;
  min-height: 3.25rem;
  align-items: center;
  justify-content: space-between;
  color: #333a3b;
  cursor: pointer;
  font-size: 0.92rem;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    width: 0.5rem;
    height: 0.5rem;
    border-right: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;
    content: '';
    transform: rotate(45deg) translateY(-0.15rem);
    transition: transform 160ms ease;
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 3px;
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

const MobileTocList = styled(TocList)`
  margin: 0 0 0.8rem;
`

const TocItem = styled.li`
  position: relative;
  margin: 0;
  padding-right: 0.5rem;
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
  grid-template-columns: 1.5rem minmax(0, 1fr);
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.45rem 0.5rem 0.45rem 0.8rem;
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
  }

  &:focus-visible {
    outline: 2px solid #a33b2f;
    outline-offset: 1px;
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
  font-size: 0.8rem;
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
  variant?: 'sidebar' | 'inline'
}

const PostTableOfContents: React.FC<PostTableOfContentsProps> = ({
  items,
  activeId,
  onSelect,
  variant = 'sidebar',
}) => {
  const { t } = useI18n()
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

  if (variant === 'inline') {
    return (
      <StyledMobileToc>
        <MobileTocSummary>{t('post.onThisPage')}</MobileTocSummary>
        <MobileTocList>
          {items.map((item, index) => (
            <TocItem key={item.id}>
              <TocButton type="button" $active={activeId === item.id} onClick={() => handleClick(item.id)}>
                <TocIndex>{String(index + 1).padStart(2, '0')}</TocIndex>
                <TocLabel>{item.title}</TocLabel>
              </TocButton>
            </TocItem>
          ))}
        </MobileTocList>
      </StyledMobileToc>
    )
  }

  return (
    <StyledToc>
      <TocTitle>{t('post.onThisPage')}</TocTitle>
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
