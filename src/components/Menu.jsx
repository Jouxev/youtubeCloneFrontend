import styled from "styled-components";
import YtLogo from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { configState, switchDarkMode } from "../redux/configSlice";

const Container = styled.div`
  flex: 1.1;
  background-color: ${({ theme }) => theme.bgLigher};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 0.8rem;
  position: sticky;
  top: 0;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 5px;
  margin-bottom: 25px;
  cursor: pointer;
`;
const LogoImg = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft}; ;
`;
const Login = styled.div``;
const ButtonLogin = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
export const Menu = () => {
  const { user: currentUser } = useSelector((state) => state.userReducer);
  const { darkMode } = useSelector(configState);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <LogoImg src={YtLogo} />
            ytClone
          </Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon /> Home
          </Item>
        </Link>
        <Link
          to={"trends"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item>
            <ExploreOutlinedIcon /> Explore
          </Item>
        </Link>
        <Link to={"subs"} style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <SubscriptionsOutlinedIcon /> Subscription
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon /> Library
        </Item>
        <Item>
          <HistoryOutlinedIcon /> History
        </Item>
        <Hr />
        {!currentUser && (
          <>
            <Login>
              Sign in, to like, comment, and subscribe
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <ButtonLogin>
                  <AccountCircleOutlinedIcon />
                  SIGN IN
                </ButtonLogin>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Title> Recommendation </Title>
        <Item>
          <LibraryMusicOutlinedIcon /> Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon /> Sport
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon /> Gaming
        </Item>
        <Item>
          <MovieCreationOutlinedIcon /> Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon /> News
        </Item>
        <Item>
          <LiveTvOutlinedIcon /> Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon /> Settings
        </Item>
        <Item>
          <FlagOutlinedIcon /> Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon /> Help
        </Item>
        <Item onClick={() => dispatch(switchDarkMode())}>
          <SettingsBrightnessOutlinedIcon />{" "}
          {darkMode === "dark" ? "light" : "dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};
