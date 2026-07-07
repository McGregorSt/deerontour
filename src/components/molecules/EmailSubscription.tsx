import React from 'react'
import styled from 'styled-components'
import SendButton from '../atoms/EmailSub/SendButton'
import EmailInput from '../atoms/EmailSub/EmailInput'

const StyledEmailSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const EmailSubscription: React.FC<{ title: string; date: string }> = ({ title, date }) => {
  return (
    <StyledEmailSubscription>
      <p>Chcesz być na bieżąco? Subskrybuj!</p>
      <StyledForm>
        <EmailInput />
        <SendButton />
      </StyledForm>
    </StyledEmailSubscription>
  )
}

export default EmailSubscription
