import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { lightTheme } from './theme/theme';
import useHover from './utils/useHover';
import GlobalStyles from './theme/global';
import Cursor from './components/Cursor';
import Badge from './components/Badge';
import Button from './components/Button';

const Img = styled.img`
  position: relative;
  margin-bottom: 20px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Header = styled.div`
  margin-bottom: 1em;
  text-align: center;

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.25em;
  }

  @media (min-width: 480px) {
    justify-content: space-between;

    h1 {
      font-size: 3em;
    }

    h2 {
      font-size: 1.5em;
    }
  }
`;

export default function App() {
  const [hoverRef, isHovered] = useHover();

  return (
    <ThemeProvider theme={lightTheme}>
      <Normalize />
      <GlobalStyles />
      <Page>
        <Header>
          <Img
            src="https://res.cloudinary.com/vinzcelavi/image/upload/v1614967728/mikecavailles/profilepic_pplhsh.png"
            alt="mikecavailles.com"
          />
          <h1>Mickael Cavaillès</h1>
          <h2>Coach sportif Montpellier</h2>
        </Header>
        <Button ref={hoverRef} href="mailto:mickaelcavailles@gmail.com">
          Contactez-moi par email
        </Button>
        <Badge>Nous refaisons le site... Un peu de patience !</Badge>
      </Page>
      <Cursor hover={isHovered} />
    </ThemeProvider>
  );
}
