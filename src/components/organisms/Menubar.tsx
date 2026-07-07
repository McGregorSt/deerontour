import React from 'react'
import styled from 'styled-components'
import MenuButton from '../atoms/MenuButton'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../molecules/Logo'

const StyledMenubar = styled.div`
  width: 100vw;
  height: 10vh;
  margin-top: -10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 996;
  background: rgba(255, 255, 255, 0.386);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', Roboto, Arial, sans-serif;
`

const StyledMenuButtons = styled.div`
  display: flex;
  align-items: center;
  & > * {
    text-decoration: none;
    color: #827f6a;
    padding: 5px 10px;
    margin: 15px 30px;
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

const Menubar = () => {
  return (
    <StyledMenubar>
      <Logo large={false} />
      <StyledMenuButtons>
        {menuItems.map((item: { button: string; link: string }, index) => (
          <Link
            key={index}
            to={item.link}
          >
            <MenuButton text={item.button} />
          </Link>
        ))}
      </StyledMenuButtons>
    </StyledMenubar>
  )
}

export default Menubar
