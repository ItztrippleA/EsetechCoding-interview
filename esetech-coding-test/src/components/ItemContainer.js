import React, { useEffect, useState } from "react";
import axios from "axios";
import GameData from "../apis/GameData";

const ItemContainer = () => {
  const [gameData, setGameData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(
          "https://adaorachi.github.io/esetech-assessment-api/game-data.json"
        )
        .then((res) => {
          console.log(res);
          setGameData(res.data);
        });
    }
    fetchData();
  }, []);
  return (
    <div className="ItemContainer">
      {gameData.map((game) => {
        return (
          <div className="item-div">
            <div className="image"></div>
            <div className="details"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemContainer;
