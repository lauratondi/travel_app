import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Cities from './components/Cities';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/cities' component={Cities} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}


export default App;
