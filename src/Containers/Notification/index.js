import React,{ useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  View, Image, Text} from 'react-native';
import style from '../SearchUser/style';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import Notif from '@/Store/Notification/Notification'

const Notification = () =>
{
     const [user_name,setU] = useState('')
   const dispatch = useDispatch()
    const imageUrl = 'http://10.0.2.2/imageposting/src/images/'
  
    const udata = useSelector(state => state.notification.data)
    
            // alert('sf')

        
     AsyncStorage.getItem('user_name').then(rs => setU(rs))
        // alert('user'+JSON.stringify(user_name))
    const logged_user_noti = udata.filter(data => data.user_name === user_name)
     const  data=(logged_user_noti)

    const unread = data.filter(data => data.status === 0)
   
    const read = data.filter(data => data.status === 1 )
    const markedRead = () =>{

        dispatch(Notif.action({type:'MARK_AS_READ',user_name:user_name}))
    }

    setTimeout(()=>markedRead() ,5000)
    // alert(JSON.stringify(read))
    return(
        <>
        <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20}}> Un Read Notifications </Text>

    {unread.length ?
    <>
     {unread?.map((data) =>(


        <View style={style.explore}>
            <View style={style.people}>
                <View style={style.people__list}>
                    <View style={style.people__person}>
                        <View style={style.people__column}>
                            <View style={style.people__avatar_container}>
                                <Image 
                                    source={{uri:imageUrl+ data.post}}
                                    style={style.people__avatar}
                                />
                            </View>
                            <View style={style.people__info}>
                                <View><Text style={style.people__username}>{data.notification}</Text></View>
                                <View><Text style={style.people__full_name}>{' ' }</Text></View>
                            </View>
                        </View>
               
                    </View>
                   
                </View>
            </View>
        </View>
        ))}
        </>
    : <Text style={{alignSelf:'center'}}> No unread notifications </Text>}
       

             <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:20}}> Read Notifications </Text>

        {read?.map((data) =>(


        <View style={style.explore}>
            <View style={style.people}>
                <View style={style.people__list}>
                    <View style={style.people__person}>
                        <View style={style.people__column}>
                            <View style={style.people__avatar_container}>
                                <Image 
                                    source={{uri:imageUrl+ data.post}}
                                    style={style.people__avatar}
                                />
                            </View>
                            <View style={style.people__info}>
                                <View><Text style={style.people__username}>{data.notification}</Text></View>
                                <View><Text style={style.people__full_name}>{' '}</Text></View>
                            </View>
                        </View>
               
                    </View>
                   
                </View>
            </View>
        </View>
        ))}
        </>
    )
}

export default Notification;