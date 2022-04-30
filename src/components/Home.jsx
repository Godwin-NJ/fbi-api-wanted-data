import React, { useEffect } from "react";
import axios from "axios";
const fbiApi = "https://api.fbi.gov/wanted";

const Home = () => {
  useEffect(() => {
    const FetchApi = async () => {
      try {
        const res = await axios.get(`${fbiApi}`);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    FetchApi();
  }, []);
  return (
    <div>
      <h2>HOME API</h2>
    </div>
  );
};

export default Home;
