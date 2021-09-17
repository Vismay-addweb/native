import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { useTheme } from '@/Theme'

const Brand = ({ height, width, mode }) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={{ height, width }}>
      <Image style={{height:200,width:200}} source={{uri:'https://i.pinimg.com/originals/9b/97/87/9b9787fb5209b99c3207554a341e3f32.png'}} resizeMode={mode} />
    </View>
  )
}

Brand.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
}

Brand.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default Brand
