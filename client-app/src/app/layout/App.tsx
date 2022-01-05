import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import { Route, useLocation } from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();

  return (
    <>
      <Route path="/" exact component={HomePage}/>
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar/>
          <Container style={{marginTop: '7em'}}>
            <Route path="/activities" exact component={ActivityDashboard}/>
            <Route path="/activities/:id" component={ActivityDetails}/>
            <Route key={location.key} path={["/createActivity", "/manage/:id"]}  component={ActivityForm}/>
          </Container>
        </>
      )}/>
     
    </>
  );
}

export default observer(App);
