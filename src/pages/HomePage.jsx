import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { VideoCard } from "../components";
import { API_ENDPOINT } from "../config";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const HomePage = ({ type }) => {
  const [videos, setvideos] = useState([]);

  const fetchVideos = async () => {
    const res = await axios.get(`${API_ENDPOINT}video/${type}`);
    setvideos(res.data);
    console.log(API_ENDPOINT);
  };
  useEffect(() => {
    fetchVideos();
  }, [type]);
  return (
    <Container>
      {videos.map((video, index) => (
        <VideoCard key="index" video={video} />
      ))}
    </Container>
  );
};
