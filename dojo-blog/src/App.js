import logo from './logo.svg';
import NavBar from './NavBar';
import Home from './Home';
import HomeNew from './HomeNew';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          {/* <Home /> */}
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <HomeNew />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound /> 
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
      
  );
}

export default App;
