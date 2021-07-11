import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './components/MainView/Home/Home';
import About from './components/MainView/About/About';
import Addablog from './components/MainView/Add/Addablog/Addablog';
import Addaevent from './components/MainView/Add/Addaevent/Addaevent'
import Blog from './components/MainView/Blog/Blog';
import Contacts from './components/MainView/Contacts/Contacts';
import Profile from './components/MainView/Profile/Profile';
import Timeline from './components/MainView/Timeline/Timeline';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/Addablog' component={Addablog} />
      <Route exact path='/Addaevent' component={Addaevent} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/contacts' component={Contacts} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/Timeline' component={Timeline} />
    </Switch>
  )
}

export default Routes