import React from 'react'
import styled from 'styled-components'
import SendButton from '../atoms/EmailSub/SendButton'
import EmailInput from '../atoms/EmailSub/EmailInput'

const StyledEmailSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-self: center; */
  & > p {
    color: #d4d1ba;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30rem;
`

const EmailSubscription: React.FC<{ title: string; date: string }> = ({ title, date }) => {
  return (
    <StyledEmailSubscription>
      <p>Stay updated – Subscribe!</p>
      <StyledForm>
        <EmailInput />
        <SendButton />
      </StyledForm>
    </StyledEmailSubscription>
  )
}

export default EmailSubscription
