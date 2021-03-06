import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import {
  Archivo_400Regular as Archivo400,
  Archivo_700Bold as Archivo700,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular as Poppins400,
  Poppins_600SemiBold as Poppins600,
} from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Archivo400,
    Archivo700,
    Poppins400,
    Poppins600,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
};

export default App;
