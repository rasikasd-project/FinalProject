import React from "react";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Forgot from "./Forgot";
import {Quiz} from './components/Quiz'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Cpp1 from './components/cpp/Cpp1'
import Java1 from './components/java/Java1'
import Python1 from './components/python/Python1'
import Nodejs1 from './components/nodejs/Nodejs1'
import Cpp2 from './components/cpp/Cpp2'
import Java2 from './components/java/Java2'
import Java3 from './components/java/Java3'
import Java4 from './components/java/Java4'
import Csharp1 from './components/csharp/Csharp1'
import Csharp2 from './components/csharp/Csharp2'
import Csharp3 from './components/csharp/Csharp3'
import Csharp4 from './components/csharp/Csharp4'

function App(){
    return(
      <Router>
        <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/Login" component = {Login} />
            <Route path = "/Register" component = {Register} />
            <Route path = "/Forgot" component = {Forgot} />
            <Route path = "/Quiz" component = {Quiz} />
            <Route path = "/Cpp1" component = {Cpp1} />
            <Route path = "/Python1" component = {Python1} />
            <Route path = "/Java1" component = {Java1} />
            <Route path = "/Java2" component = {Java2} />
            <Route path = "/Java3" component = {Java3} />
            <Route path = "/Java4" component = {Java4} />
            <Route path = "/Nodejs1" component = {Nodejs1} />
            <Route path = "/Csharp1" component = {Csharp1} />
            <Route path = "/Csharp2" component = {Csharp2} />
            <Route path = "/Csharp3" component = {Csharp3} />
            <Route path = "/Csharp4" component = {Csharp4} />
            <Route path = "/Cpp2" component = {Cpp2} />  //ADD this
        </Switch>
      </Router>
    );
}
export default App;