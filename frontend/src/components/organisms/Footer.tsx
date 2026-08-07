import React from 'react'
import styled from 'styled-components'
import MenuButton from '../atoms/MenuButton'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../molecules/Logo'
import EmailSubscription from '../molecules/EmailSubscription'

const StyledFooter = styled.div`
  background-color: #827f6a;
  /* border: 5px solid green; */
  /* color: #eee; */
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 36px -8px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 0;
  /* justify-content: space-between; */
  /* align-items: flex-start; */
  gap: 2rem;
  /* margin-top: auto; */
  /* padding: 2rem 1.5rem; */

  & > :nth-child(1) {
      /* : 4px solid red; */
    margin-right: -5rem;
    padding: 0;
    /* align-self: center; */
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    /* gap: 1.25rem; */
    padding: 1.5rem 1rem;
  }
`

const StyledFooterButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.35rem;
  padding: 0 9rem 0 0;
  /* padding: 0.25rem 0; */
  & > * {
    text-decoration: none;
    /* color: #d4d1ba5a; */
    cursor: pointer;
    min-height: 44px;
    /* display: inline-flex; */
    /* align-items: center; */
  }
`

const StyledLogo = styled.div`
  /* align-self: center; */
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
      <StyledLogo >
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
