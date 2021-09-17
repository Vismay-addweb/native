import React from 'react'
import { View, Button, StyleSheet, StatusBar, Modal, Text } from 'react-native'
import { ScrollTabView } from 'react-native-scroll-head-tab-view'

export default function TabNavFollow(props) {
  const FirstSlide = () => (
    <>
      {' '}
      {props.followers.length === 0 ? (
        <Text>no followers</Text>
      ) : (
        <>
          {props.followers.map(followers => (
            <>
              {followers.followers.map((followers, i) => (
                <Text>
                  {i + 1 + ') '}
                  {followers}
                  {'\n'}
                </Text>
              ))}
            </>
          ))}
        </>
      )}
    </>
  )
  const SecondSlide = () => (
    <>
      {' '}
      {props.following.length === 0 ? (
        <Text>no following</Text>
      ) : (
        <>
          {props.following.map(following => (
            <>
              {following.following.map((following, i) => (
                <Text>
                  {i + 1 + ') '}
                  {following}
                  {'\n'}
                </Text>
              ))}
            </>
          ))}
        </>
      )}
    </>
  )

  return (
    <Modal animationType="none" transparent={true} visible={props.isView}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>
            <ScrollTabView style={styles.container}>
              <Text tabLabel="follower  ">
                <FirstSlide />
              </Text>
              <Text tabLabel="  following">
                <SecondSlide />
              </Text>
            </ScrollTabView>
          </Text>
          <Button
            title="close"
            style={styles.button}
            onPress={props.followViewOn}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    height: 400,
    flex: 1,
  },
  view: {
    height: 400,
    width: 200,
  },
  scene: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 300,
    height: 400,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
})
