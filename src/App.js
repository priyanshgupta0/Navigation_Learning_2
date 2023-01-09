import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';
import PageB from './Screens/page_B';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Page A"
          component={HomeScreen}
        />
        <Stack.Screen name='Page B'
          component={PageB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;