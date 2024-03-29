import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/headers/profileHeader'
import UserProfileCard from '../components/user/dpAndName'
import SubProfile from '../components/subProfile/subProfile'

export default function Profile1() {
  return (
    <View>
        <Header/>
        <UserProfileCard username={'Kathryn Murphy'} profilePhotoUrl={require('./../assets/dp.png')}/>
        <SubProfile/>
    </View>
  )
}