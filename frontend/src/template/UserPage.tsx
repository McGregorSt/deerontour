import React, { ReactNode } from 'react'
import MainTemplate from './MainTemplate'
import Menubar from '../components/organisms/Menubar'
import Footer from '../components/organisms/Footer'
import styled from 'styled-components'

const StyledUserPage = styled.div`
  margin-top: 10vh;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`

interface IProps {
  children: ReactNode
}

const UserPage: React.FC<IProps> = ({ children }) => {
  return (
    <StyledUserPage>
      <MainTemplate>
        <Menubar />
        {children}
        <Footer />
      </MainTemplate>
    </StyledUserPage>
  )
}

export default UserPage
