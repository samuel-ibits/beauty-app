import { createStackNavigator } from "@react-navigation/stack";
import NotificationPopup from "../../components/notificationPopUp/notificationPopUp";
import Homepage from "../../screens/Homepage";

const Stack = createStackNavigator();

function ChattingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homepage"
        component={Homepage}
        options={{ headerShown: false }}
      />
     
      <Stack.Screen
        name="NotificationPopup"
        component={NotificationPopup}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}

export default ChattingStack;
