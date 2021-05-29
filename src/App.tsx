import { Employees } from './pages/Employees';
import { Switch, Redirect, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/employees" />
      <Route exact path="/employees" component={Employees} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
