import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {Provider} from "react-redux"
import thunk from "redux-thunk";

import MainContent from "./components/libraryMain"
import Navbar from "./components/Navbar"
import ListBooks from "./components/ListBooks/Books"
// import CardCarousel from "./components/CardCarousel"
import Footer from "./components/Footer"
import Footer2 from "./components/Footer2"

import reducers from "./reducers"

const store = createStore
(reducers, applyMiddleware(thunk));

store.subscribe(()=>{
  console.log("dari subscribe punya", store.getState());
})

function App() {
  return (
    <Provider store={store}>
    
      <Router>

        <Navbar/>
        <Switch>
        <div className="bg-utama">
        <Route path="/BooksList">
            <ListBooks />
          </Route>

          <Route exact path="/">
            <MainContent />
          </Route>
          </div>
        </Switch>
        {/* <CardCarousel/> */}
        
        <div className="footer-bg">
        <Footer/>
        </div>

        <Footer2/>

      </Router>
      
     </Provider>
  );
}

export default App;
