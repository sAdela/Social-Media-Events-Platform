import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:44333/api/Activities').then(response => {
      console.log("activities set!", response.data);
      setActivities(response.data);
    })
  }, []);

  console.log("activities", activities)
  return (
    <>
      <NavBar/>
      <Container style={{marginTop: '7em'}}>
        { <ActivityDashboard activities={activities} />}
        {/* <List>
          {activities.map(activity => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List> */}
      </Container>
    </>
  );
}
{/* <NavBar/>
       <Container style={{marginTop: '7em'}}>
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
        </Container> */}

export default App;
