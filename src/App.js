import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./layout/section";
import Wrapper from "./layout/wrapper";
import LaunchCard from "./components/lauch-card";
import RocketCard from "./components/rocket-card";
import { Grid } from "./layout/grid";

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;
`;

const ContentSelector = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button {
    border: none;
    padding: 10px;
    min-width: 100px;
    margin-right: 10px;
    border: 1px solid rgba(255, 255, 255, 0);
    :hover {
      border-color: black;
      text-transform: inherit;
      cursor: pointer;
    }
  }
`;

const apiURL = [
  "https://api.spacexdata.com/v3/launches/past?limit=3",
  "http://localhost:4000/launches?limit=50",
  "http://localhost:4000/rockets",
];

function App() {
  const [data, setData] = useState({ launches: [] });
  const [loading, setLoading] = useState(true);
  const [dataURL, setDataURL] = useState(apiURL[0]);

  const [content, setContent] = useState(<></>);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(dataURL);
      console.log(result.data);
      setData({ launches: result.data });
      setLoading(false);
    };
    fetchData();
  }, [dataURL]);

  useEffect(() => {
    switch (dataURL) {
      case apiURL[0]:
        setContent(
          data.launches.map((item, index) => (
            <LaunchCard
              key={index.toString()}
              image={item.links.mission_patch_small}
              title={item.mission_name}
              description={item.details}
            />
          ))
        );
        break;
      case apiURL[1]:
        setContent(
          data.launches.map((item, index) => (
            <LaunchCard
              key={index.toString()}
              image={item.mission_patch}
              title={item.name}
              description={item.details}
              link={item.youtube_link}
            />
          ))
        );
        break;
      case apiURL[2]:
        setContent(
          data.launches.map((item, index) => (
            <RocketCard
              key={index.toString()}
              image={item.picture}
              title={item.name}
              description={item.description}
              cost={item.cost}
            />
          ))
        );
        break;

      default:
        setContent(<></>);
        break;
    }
    // eslint-disable-next-line
  }, [data]);

  return (
    <MainWrapper>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ContentSelector>
          <button
            onClick={() => {
              setDataURL(apiURL[1]);
            }}
          >
            Launches
          </button>
          <button
            onClick={() => {
              setDataURL(apiURL[2]);
            }}
          >
            rockets
          </button>
        </ContentSelector>
      </Section>
      <Section>
        {loading && <div>loading....</div>}

        {!loading && (
          <Wrapper>
            <Grid useNegativeGutter={true}>{content}</Grid>
          </Wrapper>
        )}
      </Section>
    </MainWrapper>
  );
}

export default App;
