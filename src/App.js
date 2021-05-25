import React from "react";
import SelectList from "./components/optionList/selectList/SelectList";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from "./routing/navbar/NavBar"


const App = () => {
    return(

        <Router>
        <div className="app">
            <NavBar />
            <div className="content">
                <switch>
                    <Route exact path="/search">
                        <SelectList />
                    </Route>
                </switch>
            </div>
        </div>
        </Router>
    )
} 

export default App;