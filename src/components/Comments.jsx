import styled from "styled-components";
import { Comment } from "./Comment";
const Container = styled.div``;

const AddCommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const UserAvatar = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;
const CommentInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export const Comments = () => {
  return (
    <Container>
      <AddCommentContainer>
        <UserAvatar src="https://yt3.ggpht.com/248-5YIwu-c-OFh4DRwh30ITmCm7rvkHT_tR7nlPG6GfsNWr1VHAwpVEZ9773oaCLphmfvI9=s88-c-k-c0x00ffffff-no-rj" />
        <CommentInput placeholder="add new comment ..." />
      </AddCommentContainer>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};
