import { createStackNavigator } from "@react-navigation/stack";
import MessageListComponent from "../../screens/MessageList";
import ChatScreen from "../../screens/Chatting";
import ChatHeader from "../../components/headers/chatHeader";
import MessageHeader from "../../components/headers/defaultHeader";

const Stack = createStackNavigator();

function ChattingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MessageList"
        component={MessageListComponent}
        options={({ navigation }) => ({
          header: () => <MessageHeader title={"Messages"} />,
        })}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({ route }) => ({
          header: () => (
            <ChatHeader  route={route} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default ChattingStack;
