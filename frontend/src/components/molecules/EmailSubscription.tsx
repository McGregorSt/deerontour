import React from 'react'
import styled from 'styled-components'
import SendButton from '../atoms/EmailSub/SendButton'
import EmailInput from '../atoms/EmailSub/EmailInput'

const StyledEmailSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-self: center; */
  & > span {
    color: #d4d1ba;
    padding: 1rem 0;
  }

  @media (max-width: 1024px) {
    /* width: 100%; */
    /* max-width: 50vw; */
    & > span {
      font-size: 0.8rem;
      padding-top: 1rem;
      padding-bottom: 0.3rem;
    }
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20vw;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    gap: 0.4rem;
    /* width: 50vw; */
  }
`

const EmailSubscription: React.FC<{ title: string; date: string }> = ({ title, date }) => {
  return (
    <StyledEmailSubscription>
      <span>Stay updated – Subscribe!</span>
      <StyledForm>
        <EmailInput />
        <SendButton />
      </StyledForm>
    </StyledEmailSubscription>
  )
}

export default EmailSubscription
