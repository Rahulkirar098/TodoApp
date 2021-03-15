import React from 'react'
import { Route,Switch } from "react-router-dom";
import { Routes } from "./routes";

function App() {
  return (
  <>
  <Switch>
    {
      Routes.map((item,index) => <Route
      key={index}
      path={item.path}
      exact={item.exact}
      component={item.component}
      />)
    }
    </Switch>
</>
  );
}

export default App;
