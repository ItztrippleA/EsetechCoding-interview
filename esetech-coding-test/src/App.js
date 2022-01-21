import "./App.css";
import FilterResultContainer from "./components/FilterResultContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="leftDiv">
          <FilterResultContainer />
        </div>
        <div className="rightDiv">
          <ItemContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
