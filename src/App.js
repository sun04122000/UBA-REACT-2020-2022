import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from "./screens/HomeScreen/Javascript/Header.js";
import { StudentTeam } from "./screens/HomeScreen/Javascript/StudentTeam";
import { Beladi } from "./screens/HomeScreen/Javascript/Villages/Beladi";
import { Chandpur } from "./screens/HomeScreen/Javascript/Villages/Chandpur";
import { Chharba } from "./screens/HomeScreen/Javascript/Villages/Chharba";
import { Meerpur } from "./screens/HomeScreen/Javascript/Villages/Meerpur.js";
import { Puranpur } from "./screens/HomeScreen/Javascript/Villages/Puranpur.js";

function App() {
  return (
    <Router>
      <HomeScreen />
    </Router>
=======
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
