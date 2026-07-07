import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/Theme'
import UserPage from './UserPage'
import styled from 'styled-components'

interface IProps {
  children: ReactNode
}

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
`

const MainTemplate: React.FC<IProps> = ({ children }) => {
  return (
    <StyledMainTemplate>
      <ThemeProvider theme={theme}>
        <>{children}</>
      </ThemeProvider>
    </StyledMainTemplate>
  )
}

export default MainTemplate
