import React, {  useEffect } from 'react'
import {  ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Card'
import user_data from './api'
import Post from '@/Store/ImagePost/Post'

const Feeds = () => {
  const dispatch = useDispatch()
  async function init() {
    const uD = await user_data.get('/data')
    dispatch(Post.action({ type: 'ADD_DATA', data: uD.data }))
  }
  useEffect(() => {
    init()
  }, [])
  const data = useSelector(state => state.imagepost.data)

  return (
    <ScrollView>
      <Card data={data} />
    </ScrollView>
  )
}

export default Feeds
