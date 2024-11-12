import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicio from './src/screens/TelaInicio';

export type RootStackParamList = {
  Inicio: undefined;
  Drawer: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen name="Inicio" component={TelaInicio}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;