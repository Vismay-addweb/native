import React from 'react';
import { Image } from 'react-native';

const Posts = (props) =>
{
  const imageUrl = 'http://10.0.2.2/imageposting/src/images/'

    return(
        <Image 
        style={{
            width: '100%',
            height: 200,
          }}
          source={{uri:imageUrl+props.url}}
        />
    )
}

export default Posts;