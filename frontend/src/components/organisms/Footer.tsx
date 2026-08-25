import React from 'react'
import styled from 'styled-components'
import MenuButton from '../atoms/MenuButton'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../molecules/Logo'
import EmailSubscription from '../molecules/EmailSubscription'

const StyledFooter = styled.div`
  background-color: #827f6a;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 36px -8px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 3vh 10vw;
  gap: 2rem;

  & > :nth-child(1) {
    margin-right: -5rem;
    padding: 0;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 1.5rem 1rem;
  }
`

const StyledFooterButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.35rem;
  padding: 0 9rem 0 0;
  & > * {
    text-decoration: none;
    cursor: pointer;
    min-height: 44px;
  }
`

const StyledLogo = styled.div`
  align-self: center;
  /* border: 2px solid red; */
  @media (max-width: 768px) {
    border: 4px solid blue;
    scale: 0.6;
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
        <Logo large={true} />
      </StyledLogo>
      <StyledFooterButtons>
        {menuItems.map((item: { button: string; link: string }, index) => (
          <Link
            key={index}
            to={item.link}
          >
            <MenuButton text={item.button} />
          </Link>
        ))}
      </StyledFooterButtons>
      <EmailSubscription
        title='lal'
        date='2025'
      />
    </StyledFooter>
  )
}

export default Footer
