import { createStackNavigator } from "@react-navigation/stack";
import Profile2 from "../../screens/Profile2";
import Profile1 from "../../screens/Profile1";

const Stack = createStackNavigator();

function ChattingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile1"
        component={Profile1}
        options={{ headerShown: false }}
      
      />
      <Stack.Screen
        name="Profile2"
        component={Profile2}
        options={{ headerShown: false }}
      
      />
    </Stack.Navigator>
  );
}

export default ChattingStack;
