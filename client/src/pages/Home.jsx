import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => { // You can't use async inside of useEffect, so we need to create it into another function inside the useEffect;
    const fetchVideos = async () => {
      const res = await axios.get("/videos/random");
      setVideos(res.data);
    }

    fetchVideos();
  }, [])
  

  return (
    <Container>
      {videos.map((video) => (
        <Card />
      ))}
    </Container>
  );
};

export default Home;
