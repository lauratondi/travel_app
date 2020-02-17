import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Cities from './components/Cities';
import Footer from './components/Footer';
import Itineraries from './components/Itineraries';
// import CityCard from './components/CityCard';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/cities' component={Cities} />
            <Route path='/itineraries/:city' component={Itineraries} />
            <Route exact path='/' component={Footer} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}


export default App;
