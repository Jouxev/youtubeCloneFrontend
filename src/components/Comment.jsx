import styled from "styled-components";
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const UserAvatar = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
`;

export const Comment = () => {
  return (
    <Container>
      <UserAvatar src="https://yt3.ggpht.com/248-5YIwu-c-OFh4DRwh30ITmCm7rvkHT_tR7nlPG6GfsNWr1VHAwpVEZ9773oaCLphmfvI9=s88-c-k-c0x00ffffff-no-rj" />
      <Details>
        <Name>
          Mario Gotze <Date> 5min ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          maiores iure neque blanditiis harum dolore numquam quos eligendi natus
          rem consectetur deleniti rerum, ab cupiditate consequuntur! Quisquam
          quod asperiores dolor!
        </Text>
      </Details>
    </Container>
  );
};
