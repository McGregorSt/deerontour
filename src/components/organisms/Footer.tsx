import React from 'react'
import styled from 'styled-components'
import MenuButton from '../atoms/MenuButton'
import { Link } from 'react-router-dom'
import Logo from '../molecules/Logo'
import EmailSubscription from '../molecules/EmailSubscription'

const StyledFooter = styled.div`
  background-color: #827f6a;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 36px -8px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  padding: 1vh 10vw;
  gap: 1rem;

  & * {
    /* border: 1px solid #3b3b34; */
  }
  
  & > :nth-child(1) {
    margin-right: -15rem;
  }
  & > :nth-child(2) {
    margin-right: -20rem;
  }
  
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 0rem;
    min-height: 220px;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2rem;
    /* padding: 1.5rem 1rem; */
    & > :nth-child(3) {
      padding-top: 1rem;
    }
  }
`

const StyledFooterButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.35rem;
  padding: 0 0rem 0 0;
  & * {
    color: #3b3b34;
    /* border: 1px solid #3b3b34; */
  }

  & > * {
    display: flex;
    text-decoration: none;
    cursor: pointer;
    min-height: 44px;
    width: 100%;
  }
  @media (max-width: 768px) {
    /* border: 1px solid #d4d1ba; */
    flex-direction: row;
    justify-content: center;
    padding: 0;
    & * {
      font-size: 0.6rem;
      white-space: nowrap;
      align-items: center;
    }
  }
  @media (max-width: 1024px) {
    height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    gap: 0rem;
  }
`

const StyledLogo = styled.div`
  /* border: 1px solid #d4d1ba; */
  scale: 1.6;
  padding: 0;
  @media (max-width: 768px) {
    scale: 1;
    display: flex;
    justify-content: end;
  }
`

const menuItems = [
  {
    button: 'home',
    link: '/',
  },
  {
    button: 'tours',
    link: '/tours',
  },
  {
    button: 'cooperation',
    link: '/cooperation',
  },
  {
    button: 'contact',
    link: '/contact',
  },
  {
    button: 'about us',
    link: '/about-us',
  },
]

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogo>
        <Logo large={false} />
      </StyledLogo>
      <EmailSubscription
        title='lal'
        date='2025'
      />
      <StyledFooterButtons>
        {menuItems.map((item: { button: string; link: string }, index) => (
          <>
            <Link
              key={index}
              to={item.link}
            >
              <MenuButton text={item.button} />
            </Link>
            {/* <>|</> */}
          </>
        ))}
      </StyledFooterButtons>
    </StyledFooter>
  )
}

export default Footer
