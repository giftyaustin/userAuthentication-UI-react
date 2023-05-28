import Auth from "./authComponents/Auth";
import Dashboard from "./dashboardComp/Dashboard";
import DemoAuth from "./demoAuth/DemoAuth";
import Home from "./HomeComponents/Home";

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element = {<Home/>}/>
      <Route exact path="/demo/*" element = {<DemoAuth/>}/>
      <Route exact path="/auth/*" element = {<Auth/>}/>
      <Route exact path="/user/dashboard" element = {<Dashboard/>}/>
      </Routes>
         
    </div>
  );
}

export default App;
