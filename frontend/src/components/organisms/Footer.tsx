import React from 'react'
import styled from 'styled-components'
import MenuButton from '../atoms/MenuButton'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../molecules/Logo'
import EmailSubscription from '../molecules/EmailSubscription'

const StyledFooter = styled.div`
  background-color: #827f6a;
  color: #eee;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 36px -8px;
  display: flex;
  justify-content: space-around;
  margin-top: auto;
`

const StyledFooterButtons = styled.div`
  margin: 50px 0px 50px -230px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  padding: 5px 10px;
  & > * {
    text-decoration: none;
    color: #eee;
    cursor: pointer;
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
      <Logo large={true} />
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
