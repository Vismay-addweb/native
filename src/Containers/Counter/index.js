import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { Brand } from '@/Components'
// import { useTheme } from '@/Theme'
// import FetchOne from '@/Store/User/FetchOne'S
// import { useTranslation } from 'react-i18next'
// import ChangeTheme from '@/Store/Theme/ChangeTheme'
import  ChangeCounter  from '@/Store/Counter/ChangeCounter';
import  LoginRegister  from '@/Store/Authentication/LoginRegister';

const Counter = () => {
  const dispatch = useDispatch()
  const [update,setUpdate] = useState('')
  // const user = useSelector(state => state.user.item)
  const counter = useSelector(state => state.counter.counter)

  const counterIncr = () =>
  {
    dispatch(ChangeCounter.action({counter:"INCREMENT"}))
  }
  const counterDcr = () =>
  {
    dispatch(ChangeCounter.action({counter:'DECREMENT'}))
  }
  const Logout = async() =>
  {
     dispatch(LoginRegister.action({type:'LOGOUT'}))  
     await AsyncStorage.removeItem('user_name')
     setUpdate('dfbdf')  
  }


  return (
    <View >
     <Text style={{color:'red',marginLeft:20,fontSize:30}}>{counter}</Text>
     <View style={styles.button}><Button onPress={counterIncr}  title='+' /></View>
     <View style={styles.button}><Button onPress={counterDcr} title=' - ' /></View>
     <View style={styles.logout}><Icon.Button name='logout' onPress={Logout}>Logout</Icon.Button></View>

    </View>
  ) 
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        backgroundColor: "coral",
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        maxWidth: "48%",
        textAlign: "center",
        marginLeft:20,
      },
      logout:{
        paddingHorizontal: 8,
        paddingVertical: 6,
        backgroundColor: "coral",
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginTop:10,
        marginBottom: 6,
        maxWidth: "48%",
        textAlign: "center",
      }
})
export default Counter
