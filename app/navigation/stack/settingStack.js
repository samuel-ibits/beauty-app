import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../screens/Profile";
import Setting from "../../screens/Setting";
import Appointment from "../../screens/Myappointment";
import SavedList from "../../screens/Saved";
import Preference from "../../screens/Preference";
import Notification from "../../components/notification/notification";
import Language from "../../components/language/language";
import PushNotification from "../../components/notification/pushNotification";
import EmailNotification from "../../components/notification/emailNotification";
import SoundNotification from "../../components/notification/notificationSound";
import NotificationPopup from "../../components/notificationPopUp/notificationPopUp";

const Stack = createStackNavigator();

function ChattingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Appointment"
        component={Appointment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SavedList"
        component={SavedList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Preference"
        component={Preference}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PushNotification"
        component={PushNotification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailNotification"
        component={EmailNotification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SoundNotification"
        component={SoundNotification}
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
