import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import PopupOne from '../../components/popups/popuppay1'
import PopupTwo from '../../components/popups/popuppay2'
const Stack = createStackNavigator();

function ChattingStack() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen
        name="PopupOne"
        component={PopupOne}
        options={{ headerShown: false }}
      />
     
      <Stack.Screen
        name="PopupTwo"
        component={PopupTwo}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ChattingStack;
