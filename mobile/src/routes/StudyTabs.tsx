import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TeacherListPage from '../pages/TeacherList';
import FavoritesPage from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => (
  <Navigator
    tabBarOptions={{
      style: { elevation: 0, shadowOpacity: 0, height: 64 },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: { flex: 0, width: 20, height: 20 },
      labelStyle: {
        fontSize: 13,
        fontFamily: 'Archivo700',
        marginLeft: 16,
      },
      inactiveBackgroundColor: '#fafafc',
      activeBackgroundColor: '#ebebf5',
      inactiveTintColor: '#c1bccc',
      activeTintColor: '#32264d',
    }}
  >
    <Screen
      name="TeacherList"
      component={TeacherListPage}
      options={{
        tabBarLabel: 'Proffys',
        tabBarIcon: ({ color, size }) => (
          <Ionicons size={size} color={color} name="ios-easel" />
        ),
      }}
    />
    <Screen
      name="Favorites"
      component={FavoritesPage}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size }) => (
          <Ionicons size={size} color={color} name="ios-heart" />
        ),
      }}
    />
  </Navigator>
);

export default StudyTabs;
