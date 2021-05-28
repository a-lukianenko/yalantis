import { Employees } from "./components/Employees";
import { Switch, Redirect, Route } from "react-router-dom";
import { NotFound } from "components/NotFound";
import "./App.css";

function App() {
  return (
    <Switch>
      <Redirect exact from='/' to='/employees' />
      <Route exact path='/employees' component={Employees} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
}

export default App;
