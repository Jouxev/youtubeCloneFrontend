import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { API_ENDPOINT } from "../config";
import { loginFailuer, loginStart, loginSuccess } from "../redux/userSlice";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLigher};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;
const SubTtile = styled.h2`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.textSof};
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 10px;
  border-radius: 3px;
  width: 100%;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
`;
const Button = styled.button`
  border: none;
  borde-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  padding: 10px 20px;
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;
const Link = styled.span`
  margin-left: 30px;
`;
export const AuthPage = () => {
  const [loginInfo, setloginInfo] = useState({});
  const [registerInfo, setregisterInfo] = useState({});
  const dispatch = useDispatch();
  const login = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(`${API_ENDPOINT}auth/signin`, loginInfo);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailuer());
    }
  };

  const register = async (e) => {
    const res = await axios.post(`${API_ENDPOINT}auth/signup`, registerInfo);
    console.log(res.data);
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In </Title>
        <SubTtile> To Continue to YTCLONE</SubTtile>
        <Input
          placeholder="username"
          value={loginInfo.name || ""}
          onChange={(e) => setloginInfo({ ...loginInfo, name: e.target.value })}
        />
        <Input
          placeholder="password"
          type={"password"}
          value={loginInfo.password || ""}
          onChange={(e) =>
            setloginInfo({ ...loginInfo, password: e.target.value })
          }
        />
        <Button
          onClick={(e) => {
            login(e);
          }}
        >
          {" "}
          Sign In
        </Button>
        <Title>Or </Title>
        <Input
          placeholder="email"
          value={registerInfo.email || ""}
          onChange={(e) =>
            setregisterInfo({ ...registerInfo, email: e.target.value })
          }
        />
        <Input
          placeholder="username"
          value={registerInfo.name || ""}
          onChange={(e) =>
            setregisterInfo({ ...registerInfo, name: e.target.value })
          }
        />
        <Input
          placeholder="password"
          type={"password"}
          value={registerInfo.password || ""}
          onChange={(e) =>
            setregisterInfo({ ...registerInfo, password: e.target.value })
          }
        />
        <Button onClick={(e) => register(e)}> Sign Up</Button>
      </Wrapper>
      <More>
        English(US)
        <Links>
          <Link>Privay</Link>
          <Link>Help</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};
