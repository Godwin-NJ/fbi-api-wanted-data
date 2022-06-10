import React, { useEffect, useState } from "react";
import axios from "axios";
const fbiApi = "https://api.fbi.gov/wanted";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mostWanted, setMostWanted] = useState([]);
  console.log(mostWanted);

  useEffect(() => {
    FetchApi();
  }, []);

  const FetchApi = async () => {
    try {
      const res = await axios.get(`${fbiApi}`);
      setMostWanted(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>HOME API</h2>
    </div>
  );
};

export default Home;
