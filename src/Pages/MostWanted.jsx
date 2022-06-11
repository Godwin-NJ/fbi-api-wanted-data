import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const fbiApi = "https://api.fbi.gov/wanted";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mostWanted, setMostWanted] = useState([]);
  const [BrokenImage, setBrokenImage] = useState("");
  // console.log(mostWanted);
  const wantedImage =
    "https://thumbs.dreamstime.com/b/wanted-red-stamp-text-brown-background-illustration-78387566.jpg";
  const handImageError = (e) => {
    return (e.target.src = `${wantedImage}`);
  };

  useEffect(() => {
    FetchApi();
  }, []);

  const FetchApi = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${fbiApi}`);
      setMostWanted(res.data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (isLoading) {
    return <h2>API is loading</h2>;
  }

  return (
    <Wrapper>
      {mostWanted.map((item) => {
        const {
          uid,
          title,
          id: referenceUrl,
          images,
          caution,
          url,
          dates_of_birth_used: age,
          description,
        } = item;
        const { caption, large, original, thumb } = images[0];
        return (
          <div key={uid} className="main">
            <div>
              <img
                className="image-head"
                src={`${large}`}
                alt={`${caption}`}
                onError={handImageError}
              />
            </div>
            <footer>
              <span>{age}</span>
              <h2>{title}</h2>
              <span>
                <a href={`${url}`}>More Info </a>
              </span>
              {/* <span>{caution}</span> */}
              <h5>{description}</h5>
            </footer>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media (min-width: 750px) {
    .main {
      margin: 10px;
    }
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1160px) {
    grid-template-columns: 1fr auto 1fr;
  }
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  gap: 3px;
  padding: 5px;
  .main {
    width: 25rem;
    /* height: 50%; */
    margin: 10px auto;
    /* border: 5px solid black; */
  }
  .image-head {
    padding: 5px;
    width: 20rem;
    height: 20rem;
  }
  h5 {
    font-size: large;
  }
  footer {
    /* border: 1px solid black; */
    padding: 5px;
    background-color: #d8d8d8;
    /* color: ; */
    cursor: pointer;
    width: 20rem;
    :hover {
      /* background-color: #99cbeb; */
      /* color: #2e47c6; */
      animation: slant 2s ease-out;
      z-index: 1;
      /* rotate: 0.35turn;
      transition: rotate 1s; */
    }
    @keyframes slant {
      from {
        transform: rotate(2deg);
      }
      to {
        transform: rotate(2deg);
      }
    }
  }
`;

export default Home;
