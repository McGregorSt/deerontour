import React from 'react'
import styled, { css } from 'styled-components'

const StyledPostParagraph = styled.div<{ hidden?: boolean }>`
  color: #4a5051;
  font-size: 0.96rem;
  line-height: 1.7;
  padding: 0;
  margin: 0 0 1.1rem;
  ${(props) =>
    props.hidden &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
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
