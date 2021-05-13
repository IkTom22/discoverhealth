
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainApp from './MainApp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainApp/>
        </Route>
        
      </Switch>
    </BrowserRouter>

    
  );
}

export default App;
