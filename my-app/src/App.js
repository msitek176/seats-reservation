import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './containers/Home'
import Summary from './containers/Summary'
import SeatListing from "./containers/seatListing";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";

function App() {
    return (
    <div className="App ">
        <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/form" exact component={SeatListing}/>
                        <Route path="/summary" exact component={Summary}/>
                        <Route>404 Not Found </Route>
                    </Switch>
                </Router>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
