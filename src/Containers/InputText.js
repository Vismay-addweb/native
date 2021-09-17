import {TextInput} from 'react-native'
import React from 'react';
const INPUT = (props) =>
{
    const sty = props.style !== undefined ? props.style : {color:"black",borderBottomColor:"black",marginBottom:10,borderBottomWidth:1,width:"60%"}
    return( 
    <TextInput
        placeholder={props.place}
        style={sty}
        secureTextEntry={props.type}
        onChangeText={props.changeText}
        value={props.val}
    />
    
 )
}

export default INPUT;