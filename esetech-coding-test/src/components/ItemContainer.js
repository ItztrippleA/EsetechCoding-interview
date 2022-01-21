import React, { useEffect } from "react";
import axios from "axios";
import GameData from "../apis/GameData";

const ItemContainer = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(
          "https://adaorachi.github.io/esetech-assessment-api/game-data.json"
        )
        .then((res) => {
          console.log(res);
        });
    }
    fetchData();
  }, []);
  return (
    <div className="ItemContainer">
      <div className="item-div">
        <div className="image"></div>
        <div className="details"></div>
      </div>
    </div>
  );
};

export default ItemContainer;
