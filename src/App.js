import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { Header } from "./screens/HomeScreen/Javascript/Header.js";
import { StudentTeam } from "./screens/HomeScreen/Javascript/StudentTeam";
import { Beladi } from "./screens/HomeScreen/Javascript/Villages/Beladi";
import { Chandpur } from "./screens/HomeScreen/Javascript/Villages/Chandpur";
import { Chharba } from "./screens/HomeScreen/Javascript/Villages/Chharba";
import { Meerpur } from "./screens/HomeScreen/Javascript/Villages/Meerpur.js";
import { Puranpur } from "./screens/HomeScreen/Javascript/Villages/Puranpur.js";
import {InitCard_Events} from "./screens/Events/InitCard_Events"
import { FacultyTeam } from "./screens/HomeScreen/Javascript/FacultyTeam";
import { ContactUs } from "./screens/HomeScreen/Javascript/ContactUs";

import "./App.css"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import InitiativeScreen from "./screens/InitiativeScreen/InitiativeScreen";
import Education from "./screens/InitiativeScreen/javascript/Education";
import AllInit from "./screens/InitiativeScreen/javascript/AllInit";
import Health from "./screens/InitiativeScreen/javascript/Health"
import Technology from "./screens/InitiativeScreen/javascript/Technology";
import Awareness from "./screens/InitiativeScreen/javascript/Awareness";
import Other from "./screens/InitiativeScreen/javascript/Other";
import Initiative_detail from "./screens/InitiativeScreen/Initiative_detail";


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element= {<HomeScreen />} />
        <Route exact path='/initiatives' element= {<InitiativeScreen />}>
          <Route index element={<AllInit />} />
          <Route path = 'education' element={<Education />} />
          <Route path = 'health' element={<Health />} />
          <Route path = 'awareness' element={<Awareness />} />
          <Route path = 'technology' element={<Technology />} />
          <Route path = 'other' element={<Other />} />
        </Route>
        <Route exact path='/initiative-detail/:name/:village' element= {<Initiative_detail />} />
    <Route>
<HomeScreen/>
    </Route>

        
      </Routes>
    </>
  );
}

export default App;