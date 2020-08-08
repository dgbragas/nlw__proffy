import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from '../pages/Landing';
import GiveClassesPage from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Landing" component={LandingPage} />
      <Screen name="GiveClasses" component={GiveClassesPage} />
      <Screen name="Study" component={StudyTabs} />
    </Navigator>
  </NavigationContainer>
);

export default AppStack;
