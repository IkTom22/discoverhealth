
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MenuBar from './components/headerbar/MenuBar';
import MainApp from './MainApp';
import Admin from './components/admin/Admin';
import InfoByDisease from './components/Disease/info/InfoByDisease';

function App() {
  return (
    <BrowserRouter>
      <MenuBar/>
      <Switch>
        <Route exact path="/admin">
          <Admin/>
        </Route>
        <Route path="/admin/:slug" render={(props)=>{return<InfoByDisease {...props} />}}
        />

        <Route exact path="/">
          <MainApp/>
        </Route>
        
      </Switch>
    </BrowserRouter>

    
  );
}

export default App;
