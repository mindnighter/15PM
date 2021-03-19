import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import style from './Profile.module.css';
import Education from '../Education/Education';
import Experience from '../WorkExperience/WorkExperience';
import Resume from '../Resume/Resume';
import Form from './formProfile';
import Navigation from '../Navigation/Navigation'

const Profile = () =>{
    return <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path ="/education">
            <Education />
          </Route>
          <Route path ="/experience">
              <Experience />
            </Route>
            <Route path ="/resume">
             <Resume />
            </Route>
            <Route path ="/">
              <Form></Form>
            </Route>
      </Switch>
    </BrowserRouter>
    </div>
}

export default Profile;