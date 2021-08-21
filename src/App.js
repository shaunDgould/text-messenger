import './App.css';
import MessageForm from "./MessageForm";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
  return (
      <div className="App">

      <Router>
          <div>
              <header className="App-header">
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/message-form">Send A Message</Link>
                      </li>
                      <li>
                          <Link to="/users">Users</Link>
                      </li>
                  </ul>
              </nav>
              </header>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path="/message-form">
                    <MessageForm />
                  </Route>
                  <Route path="/users">
                      <Users />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>


    </div>


  );
}
function Home() {
    return <h2>Home</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
export default App;
