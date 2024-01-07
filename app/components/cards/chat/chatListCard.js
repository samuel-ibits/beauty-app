import React from 'react';
import { View, Image, Text } from 'react-native';

const ChatCard = () => {
  return (
    <View style={{
      width: '100%',    
      paddingHorizontal: 15,
      paddingVertical:5,
      borderRadius: 6, 
      flexDirection: 'row',
      alignItems: 'center',
    }}>
     <Image 
       source={{uri: 'https://randomuser.me/api/portraits/women/68.jpg'}}
       style={{width: 42, height: 42, borderRadius: 21, borderWidth: 1}} 
     />
     <View style={{marginLeft: 12}}>
       <Text style={{
         fontFamily: 'Poppins',
         fontSize: 11,
         fontWeight: '400', 
         width: 88,  
       }}>
         Leslie Alexander
       </Text>
       <Text style={{
         fontFamily: 'Poppins',
         fontSize: 9,
         fontWeight: '400',
         color: '#00000099',
         height: 13
       }}> 
         Pending  
       </Text>
     </View>
    </View>
  );
}

export default ChatCard;