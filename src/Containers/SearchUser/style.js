import {

    StyleSheet,
  } from 'react-native'
const style = StyleSheet.create({
    people:{
        width:'80%',
        borderRadius: 3,
        borderWidth:1,
        backgroundColor: 'white',
        maxWidth: 1000,
        marginLeft:30,
        marginTop:20
    },
    
    people__person:{
        paddingTop:10,
        paddingBottom:20,
        display: 'flex',
        justifyContent:'space-between',
        // align,
    },
    

    people__avatar:{
        height: 56,
        width: 56,
        borderRadius: 50,
    },
    
    people__column:{
        display: 'flex',
        alignItems:'flex-start', 
        marginLeft:15
    },
    
    people__info:{
        marginLeft:65,
        width: 200,
        marginTop:-50
    },
    
    people__username:{
        display: 'flex',
        fontWeight: '600',
        alignItems: 'center',
        marginBottom: 5,
    },
    
    
    people__full_name:{
        color:'#999',
    },
    
    people__column_button:{
        backgroundColor: '#3897f0',
        paddingTop:7,
        paddingBottom: 13,
        color:'white',
        borderRadius: 3,
        fontWeight: '600',
    }

},)

export default style