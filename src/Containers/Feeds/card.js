// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import user_data from './api'
// import {
//   View,
//   ActivityIndicator,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   FlatList,
// } from 'react-native'
// import { Brand } from '@/Components'
// import style from './style'
// import { useTheme } from '@/Theme'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome'
// import Posts from './Post'
// import Reply from './reply'
// import Comment from './Comment'
// import AddComment from './AddComment'
// const Card = () => {
//   // const imageUrl = 'http://10.0.2.2/imageposting/src/images/'
//   const data = useSelector(state => state.imagepost.data)
//   const disptach = useDispatch()
//   const [update,setUppdate] = useState()

//   return (
//     <>
  
//       {data.map((data,i) => (
//         <View style={style.feed}>
//           {data.posts.map((posts,j) => (
//             <View style={style.photo}>
//               <View style={style.photo__header}>
       
//                 <View style={style.photo__header_column}>
//                 <Image 
//                   source={{uri:data.DP}}
//                   style={{width:40,height:40,borderRadius:100}}
//                 />
//                  <Text style={{ fontWeight: 'bold' }}>
//                 {data.user_name}</Text>
//                 </View>
              
//               </View>
//               <View style={style.photo__file_container}>
                
//                 <Posts url={posts.post} />
//               </View>
//               <View style={style.photo__info}>
                
//                 <Comment data={posts.comments} user_id={i} post_id={j} />
              
                 
//               </View>
                
//             </View>
//           ))}
//         </View>
//       ))}
//     </>
//   )
// }

// export default Card
