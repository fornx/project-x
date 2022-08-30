import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen'
import PageAScreen from './src/screens/PageAScreen'
import PageA1Screen from './src/screens/PageA1Screen'
import PageBScreen from './src/screens/PageBScreen'
import PageB1Screen from './src/screens/PageB1Screen'
import PageCScreen from './src/screens/PageCScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home Page">
        <Stack.Screen name="Home Page" component={HomeScreen} />
        <Stack.Screen name="Page A" component={PageAScreen} />
        <Stack.Screen name="Page A1" component={PageA1Screen} />
        <Stack.Screen name="Page B" component={PageBScreen} />
        <Stack.Screen name="Page B1" component={PageB1Screen} />
        <Stack.Screen name="Page C" component={PageCScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
