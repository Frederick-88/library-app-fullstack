import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {Provider} from "react-redux"

import MainContent from "./components/libraryMain"
import Navbar from "./components/Navbar"
import ListBooks from "./components/ListBooks/Books"
import Footer from "./components/Footer"

const store = createStore
// (reducers, applyMiddleware(thunk));

// store.subscribe(()=>{
//   console.log("dari subscribe punya", store.getState());
// })

function App() {
  return (
    // <Provider store={store}>
      <Router>

        <Navbar/>
        <Switch>
        <Route path="/BooksList">
            <ListBooks />
          </Route>

          <Route exact path="/">
            <MainContent />
          </Route>

        </Switch>
        <Footer/>

      </Router>
    // </Provider>
  );
}

export default App;
