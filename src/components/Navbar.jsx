import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLigher};
  height: 56px;
`;
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  position: relative;
`;
const SearchContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 40%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 5px;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
`;
const ButtonLogin = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;
const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #999;
`;
export const Navbar = () => {
  const { user: currentUser } = useSelector((state) => state.userReducer);
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <SearchInput placeholder="Search" />
          <SearchOutlinedIcon />
        </SearchContainer>
        {currentUser ? (
          <User>
            <VideoCallOutlinedIcon />
            <Avatar src={currentUser.imgUrl} />
            {currentUser.name}
          </User>
        ) : (
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <ButtonLogin>
              <AccountCircleOutlinedIcon /> SIGN IN{" "}
            </ButtonLogin>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};
