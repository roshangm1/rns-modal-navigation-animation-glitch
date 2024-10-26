import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import App from './App';

export default function AppContainer() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

registerRootComponent(AppContainer);