import styled from "styled-components";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import { Comments, VideoCard } from "../components";
const Container = styled.div`
  display: flex;
  gap: 18px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Buttons = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text};
  gap: 20px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft}; ;
`;

const Recommendation = styled.div`
  flex: 2;
`;
const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 15px;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelAvatar = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
`;
const ChannelDesc = styled.p`
  font-size: 14px;
`;
const SubscribeBtn = styled.button`
  background-color: #cc1a00;
  font-wight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

export const VideoPage = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/QHWCXzZg-7w"
            title="Looney Tunes - Baseball Bugs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title> Looney Tunes Bugs Bunny with Rabbit </Title>
        <Details>
          <Info> 667,998 views - 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpAltOutlinedIcon /> 223K
            </Button>
            <Button>
              <ThumbDownAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <ChannelContainer>
          <ChannelInfo>
            <ChannelAvatar src="https://yt3.ggpht.com/248-5YIwu-c-OFh4DRwh30ITmCm7rvkHT_tR7nlPG6GfsNWr1VHAwpVEZ9773oaCLphmfvI9=s88-c-k-c0x00ffffff-no-rj" />
            <ChannelDetail>
              <ChannelName> Jouxev</ChannelName>
              <ChannelCounter> 200K subscribers</ChannelCounter>
              <ChannelDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magnam illo sed cupiditate veritatis tempora voluptas laborum
                repellat reiciendis quisquam, molestias culpa, dignissimos eius
                deserunt architecto quidem voluptates earum nobis?
              </ChannelDesc>
            </ChannelDetail>
          </ChannelInfo>
          <SubscribeBtn> SUBSCRIBE</SubscribeBtn>
        </ChannelContainer>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
      </Recommendation>
    </Container>
  );
};
