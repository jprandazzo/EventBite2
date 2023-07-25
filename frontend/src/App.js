import './App.css';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SignUpForm from './components/users/SignUpForm';
import SignInForm from './components/users/SignInForm';
import EventIndex from './components/events/EventIndex';

function App() {
  
  return (
    <>
    {/* <a href='/signup'>Sign Up</a> */}
    
    <Switch>
      <Route exact path="/"> <EventIndex /> </Route>
      <Route exact path="/signin/signup"> <SignUpForm /> </Route>
      <Route exact path="/signin"> <SignInForm /> </Route>
      {/* <Route path='' */}
      {/* <Route path="/signin"> <SignUpForm /> </Route> */}

      {/*<Route path="/events/new" component={EventForm} />
      <Route exact path="/events/:eventId" component={EventShow} />
      <Route path="/events/:eventId/edit" component={EventForm} /> */}
    </Switch>
    </>
  );
}

export default App;