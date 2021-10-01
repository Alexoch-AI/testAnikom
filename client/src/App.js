import Header from './components/Header/Header';
import './app.css'
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tabs from './components/Tabs/Tabs';


function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/tabs/:marker">
            <Tabs />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
