import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'

const PostThumbs = (props) =>
{
    const data = props.data
    // alert(JSON.stringify(data[0].posts))
  const imageUrl = 'http://10.0.2.2/imageposting/src/images/'

    return(
        <View style={styles.containerStyle}>
        {data[0]?.posts?.map((posts)=>(

        <View style={styles.textContainerStyle}>
            <Image source={{uri:imageUrl+posts.post}} style={{height:120,width:120}} />
        </View>
        ))}
    </View> 
    )
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textContainerStyle: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center' 
    }
}
export default PostThumbs;