import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

function InnerScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="A" component={ScreenA} options={{ title: 'Screen A' }} />
      <Stack.Screen name="B" component={ScreenB} options={{ title: 'Screen B' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <RootStack.Navigator>
      <Stack.Screen name="Inner" component={InnerScreen} options={{ headerShown: false }} />
      <Stack.Screen name="C" component={ScreenC}
        options={({ navigation, route }) => ({
          presentation: 'modal',
          headerLeft: () => <Button title="X" onPress={() => navigation.goBack()} />,
        })}
      />
    </RootStack.Navigator>
  );
}

/* Boring placeholder screens */

function ScreenA({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'red' }}>A</Text></Text>
      <Button title="Go to B" onPress={() => navigation.navigate('B')} />
    </View>
  );
}

function ScreenB({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'green' }}>B</Text></Text>
      <Button title="Go to C" onPress={() => navigation.navigate('C')} />
    </View>
  );
}

function ScreenC() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen C (Modal)</Text>
    </View>
  );
}
