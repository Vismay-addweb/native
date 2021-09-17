import React from 'react'
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { ScrollTabView } from 'react-native-scroll-head-tab-view'

import Card from '../Card'
import PostThumbs from './PostThumbs'

export default function TabNav(props) {
  const FirstRoute = () => <PostThumbs data={props.userData} />

  const SecondRoute = () => {
    return <Card data={props.userData} />
  }

  return (
    // <View >
      <ScrollTabView style={styles.container}>
        <ScrollView tabLabel="PHOTOS">
          <FirstRoute />
        </ScrollView>
        <ScrollView tabLabel="Also PHOTOS">
          <SecondRoute />
        </ScrollView>
      </ScrollTabView>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    height: 400,
    flex: 1,
  },
  scene: {
    flex: 1,
  },
})

{
  /* <TabView 
        style={styles.container}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        overScrollMode='auto'
        initialLayout={initialLayout}
      /> */
}
