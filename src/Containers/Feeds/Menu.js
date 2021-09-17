// import { Button, Menu, Divider, Provider } from 'react-native-paper';
import React,{useState} from 'react'

import Feather from 'react-native-vector-icons/MaterialCommunityIcons'
import { MenuProvider } from 'react-native-popup-menu';
import { View , Text, TouchableOpacity} from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

let defStyle={
  width:40,height:10
}
const CustomMenu = (props) =>
{
let _menu=null
const [height,setHeight]= useState(false)
const onMenuOpen = () =>
{
  setHeight(!height)
}
return(
  

    <MenuProvider>
      <View style={{position:'relative',marginLeft:10,height:100,width:100,elevation:1}}>
    <Menu  >
    
         <MenuTrigger >
         <Feather name='dots-vertical'  color='black'  />                
      </MenuTrigger>
      <MenuOptions >
        <MenuOption style={{height:20,width:20}} onSelect={() => alert(`Save`)} >
            <Text><Feather name='delete' color='red' /></Text>
        </MenuOption>
        <MenuOption style={{height:20,width:20}}>
          <Feather name='home' />
        </MenuOption>

      </MenuOptions>
    </Menu>
    </View>  
    </MenuProvider>

)
// return(
//     <Provider>
//           <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'center',
//         }}>
//         <Menu
//                   visible={visible}
//                   onDismiss={closeMenu}
//                   anchor={<Feather size={20} onPress={openMenu} name='more-vertical'/>}
//         >
//         <Menu.item  onPress={()=>{closeMenu}} title="1" />
//         <Menu.Item  onPress={()=>{closeMenu}} title="2"/>
//         </Menu>
//         </View>
//     </Provider>
// )

}

export default CustomMenu;