import React from 'react'
import styled, { css } from 'styled-components'

const StyledPostParagraph = styled.div<{ hidden?: boolean }>`
  height: 100%;
  font-size: 0.8rem;
  padding: 5px 20px;
  ${(props) =>
    props.hidden &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      white-space: normal;
      line-height: 1.5;
    `}
`

const PostParagraph: React.FC<{ text: string; hidden?: boolean }> = ({ text, hidden }) => {
  return <StyledPostParagraph hidden={hidden}>{text}</StyledPostParagraph>
}

export default PostParagraph
