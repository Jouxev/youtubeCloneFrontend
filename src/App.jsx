import styled, { ThemeProvider } from "styled-components";
import { Menu, Navbar } from "./components";
import { darkMode, lightMode } from "./utils/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthPage, HomePage, VideoPage } from "./pages";
import { configState } from "./redux/configSlice";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;
const App = () => {
  const { darkMode: isDarkMode } = useSelector(configState);
  return (
    <ThemeProvider theme={isDarkMode === "dark" ? darkMode : lightMode}>
      <Container>
        <BrowserRouter>
          <Menu />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<HomePage type="random" />} />
                  <Route path="trends" element={<HomePage type="trend" />} />
                  <Route path="subs" element={<HomePage type="subs" />} />
                  <Route path="signin" element={<AuthPage />} />
                  <Route path="register" element={<AuthPage />} />
                  <Route path="video">
                    <Route path=":id" element={<VideoPage />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
