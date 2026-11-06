import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import SendButton from '../atoms/EmailSub/SendButton'
import EmailInput from '../atoms/EmailSub/EmailInput'
import { useI18n } from '../../i18n/I18nContext'
import { subscribeToNewsletter } from '../../support/api'

type Feedback = {
  message: string
  isError: boolean
}

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

const StyledFeedback = styled.div<{ $isError: boolean }>`
  min-height: 2.4em;
  margin-top: 0.4rem;
  color: ${({ $isError }) => ($isError ? '#8b342c' : '#3f6347')};
  font-size: 0.72rem;
  line-height: 1.2;
  text-transform: none;

  @media (max-width: 600px) {
    min-height: 3.6em;
    text-align: left;
  }
`

const EmailSubscription: React.FC<{ title: string; date: string }> = ({ title, date }) => {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const isSubmittingRef = useRef(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmittingRef.current) return

    const normalizedEmail = email.trim()
    if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setFeedback({ message: t('newsletter.invalidEmail'), isError: true })
      return
    }

    isSubmittingRef.current = true
    setIsSubmitting(true)
    setFeedback(null)
    try {
      const result = await subscribeToNewsletter(normalizedEmail)

      if (result.status === 201) {
        setFeedback({ message: t('newsletter.success'), isError: false })
      } else if (result.status === 200) {
        setFeedback({
          message: result.message || t('newsletter.requestReceived'),
          isError: false,
        })
      } else if (result.status === 400) {
        setFeedback({ message: t('newsletter.invalidEmail'), isError: true })
      } else {
        setFeedback({ message: t('newsletter.error'), isError: true })
      }
    } catch {
      setFeedback({ message: t('newsletter.error'), isError: true })
    } finally {
      isSubmittingRef.current = false
      setIsSubmitting(false)
    }
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    if (feedback) setFeedback(null)
  }

  return (
    <StyledEmailSubscription>
      <span>{t('newsletter.title')}</span>
      <StyledForm onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
        <EmailInput
          value={email}
          disabled={isSubmitting}
          onChange={handleEmailChange}
        />
        <SendButton disabled={isSubmitting} />
      </StyledForm>
      <StyledFeedback
        id='newsletter-feedback'
        role='status'
        aria-live='polite'
        aria-atomic='true'
        $isError={feedback?.isError ?? false}
      >
        {feedback?.message || ''}
      </StyledFeedback>
    </StyledEmailSubscription>
  )
}

export default EmailSubscription
