import React, { ReactNode } from 'react'
import MainTemplate from './MainTemplate'
import Menubar from '../components/organisms/Menubar'
import Footer from '../components/organisms/Footer'
import styled from 'styled-components'

const StyledUserPage = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 10vh);

  @media (max-width: 768px) {
    margin-top: 0;
    min-height: 100vh;
  }
`

interface IProps {
  children: ReactNode
}

const UserPage: React.FC<IProps> = ({ children }) => {
  return (
    <StyledUserPage>
      <MainTemplate>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Menubar />
          {children}
        </div>
        <Footer />
      </MainTemplate>
    </StyledUserPage>
  )
}

export default UserPage
