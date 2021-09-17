import {
    StyleSheet,
  } from 'react-native'
const style = StyleSheet.create({
    feed:{
        marginTop:10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    
    photo:{
        width:"80%",
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth:1,
        maxWidth: 800,
        marginBottom: 40,
        
    },
    
    photo__header:{
        padding:20,
        display: "flex",
        alignItems: "center",
        borderBottomWidth:1,
    },
    
    photo__avatar:{
        height: 30,
        width: 30,
        borderRadius: 5,
        marginRight:15,
    },
    
    photo__username:{
        display: "flex",
        fontWeight: '600',
        marginBottom: 5,
    },
    
   photo__file:{
        maxWidth: "100%",
    },
    
    photo__info:{
        paddingTop:20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 20,
    },
    
    hoto__icons:{
        marginBottom: 10,
        fontSize: 18,
    },
    

    
    photo__likes:{
        fontWeight: '600',
        marginBottom: 10,
        display: "flex",
    },
    
    photo__comment:{
        marginTop:10,
        marginBottom:10,

    },
    photo__reply:{
        marginLeft:25,
        marginTop:10,
    },
    
    photo__comment_author:{
       fontWeight: 'bold',
        marginRight: 5,
    },
    
    photo__time_ago:{
        color:"#999",
        textTransform: "uppercase",
        fontSize: 10,
        paddingBottom: 10,
        display: "flex",
        borderBottomWidth:1,
    },
    
    photo__add_comment_container:{
        position: "relative",
    },
    
    photo__add_comment_container :{
        position: "absolute",
        top:17,
        right:0,
    },
    
   photo__add_comment:{
        width: "97%",
        fontSize: 14,
        paddingTop:15,
    },
    photo__add_comment_send:{
        width:100,
        fontSize: 14,
        paddingTop:15,
    },

    
   heart_red:{
        color:"red",
    },
},)

export default style;