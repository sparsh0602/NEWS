
import './App.css';
import NavBar from './components/NavBar';
import NewsCard from './components/NewsCard';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Error from './components/Error';



function App() {

  const [Mode, setMode] = useState("light");
  const [modetype, setmodetype] = useState("LIGHTMODE");
  const [alert, setalert] = useState(null);
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode("dark");
      setmodetype("DARKMODE");
      setalert("Dark-Mode Enabled");
      document.body.style.backgroundColor = '#00004d';
    }
    else {
      setMode("light");
      setmodetype("LIGHTMODE");
      setalert("Light-Mode Enabled");
      document.body.style.backgroundColor = '#F0FFFF';
    }
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <Router>
      <div className="App">
        <NavBar title={"AnytimeNews"} mode={Mode} ToggleMode={toggleMode} modeType={modetype}/>
        <Switch>
          <Route exact path="/">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="general" category={"General"} mode={Mode} ToggleMode={toggleMode} modeType={modetype} />
          </Route>
          <Route exact path="/sports">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="sports" category={"Sports"} mode={Mode} ToggleMode={toggleMode} modeType={modetype} />
          </Route>
          <Route exact path="/health">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="health" category={"Health"} mode={Mode} ToggleMode={toggleMode} modeType={modetype} />
          </Route>
          <Route exact path="/entertainment">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="entertainment" category={"Entertainment"} mode={Mode} ToggleMode={toggleMode} modeType={modetype} />
          </Route>
          <Route exact path="/business">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="business" category={"Business"} mode={Mode} ToggleMode={toggleMode} modeType={modetype} />
          </Route>
          <Route exact path="/technology">
            <NewsCard imageUrl={"https://live-production.wcms.abc-cdn.net.au/afbc247ab64a853776a249c2ec8378b7?impolicy=wcms_crop_resize&cropH=1125&cropW=2000&xPos=0&yPos=237&width=862&height=485"} key="technology" category={"Technology"} mode={Mode} ToggleMode={toggleMode} modeType={modetype} />
          </Route>
          <Route exact path="*">
           <Error/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
