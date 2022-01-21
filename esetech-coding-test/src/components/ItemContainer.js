import React, { useEffect } from "react";
import axios from "axios";

function ItemContainer() {
  useEffect(async () => {
    const result = await axios
      .get("https://adaorachi.github.io/esetech-assessment-api/game-data.json")
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  return (
    <div className="ItemContainer">
      <div className="item-div"></div>
    </div>
  );
}

export default ItemContainer;
