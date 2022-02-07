import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {InitCard_Events} from "./screens/Events/InitCard_Events"
import "./App.css"

function App() {
  return (
    <>
   <HomeScreen/>
    {/* <InitCard_Events/> */}
    </>
  );
}

export default App;
