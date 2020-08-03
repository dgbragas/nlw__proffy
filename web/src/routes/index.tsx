import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/Landing';
import TeacherPage from '../pages/Teacher';
import TeacherFormPage from '../pages/TeacherForm';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/study" component={TeacherPage} />
      <Route path="/give-classes" component={TeacherFormPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
