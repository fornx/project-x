import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{marginTop:10}} >
        <Button style={styles.buttonStyle} title='Page A' onPress={() => navigation.navigate('Page A')}/>
      </View>
      <View style={{marginTop:10}} >
        <Button style={styles.buttonStyle} title='Page B' onPress={() => navigation.navigate('Page B')}/>
      </View>
      <View style={{marginTop:10}} >
        <Button style={styles.buttonStyle} title='Page C' onPress={() => navigation.navigate('Page C')}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function PageAScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{marginTop:10}} >
        <Button style={styles.buttonStyle} title='Page A1' onPress={() => navigation.navigate('Page A1')}/>
      </View>
      <View style={{marginTop:10}} >
        <Button style={styles.buttonStyle} title='Page A2'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function PageA1Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{marginTop:10}} >
        <Button style={styles.buttonStyle} title='Page A3'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function PageBScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{marginTop:10}} >
        <Button style={styles.buttonStyle} title='Page B1' onPress={() => navigation.navigate('Page B1')}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function PageB1Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{marginTop:10}} >
        <Button style={styles.buttonStyle} title='Page B2'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function PageCScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{marginTop:10}} >
        <Button style={styles.buttonStyle} title='Page C'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  }
});
