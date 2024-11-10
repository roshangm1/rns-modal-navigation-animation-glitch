import * as React from "react";
import { Button, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator();
import { FC } from "react";

export default function App() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={ScreenA}
        options={{
          headerTitleAlign: "left",
        }}
      />
      <RootStack.Screen
        name="B"
        component={ScreenB}
        options={{
          presentation: "modal",
        }}
      />
    </RootStack.Navigator>
  );
}

function ScreenA({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text>
        Screen{" "}
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "red" }}>
          A
        </Text>
      </Text>

      <Button title="Go to B" onPress={() => navigation.navigate("B")} />
    </View>
  );
}

function ScreenC({ navigation }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setData(Array.from({ length: 50 }, (_, i) => ({ key: i })));
    }, 500);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>
        Screen{" "}
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "red" }}>
          C
        </Text>
      </Text>

      <Button title="Go to B" onPress={() => navigation.navigate("B")} />
    </View>
  );
}

function ScreenB({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Screen{" "}
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "green" }}>
          B
        </Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </Text>
    </View>
  );
}
