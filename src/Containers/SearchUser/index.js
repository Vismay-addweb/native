import user_api from '../Feeds/api'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import INPUT from '../InputText'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button, View, Image, Text, TextInput } from 'react-native'
import style from './style'
import Follow from '@/Store/Follow/Follow'
const SearchUser = () => {
    const [searchUser, setSearchUser] = useState('')
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [user_name, setU] = useState('')
    let [followUnfollow, setFU] = useState(false)
    AsyncStorage.getItem('user_name').then(rs => {
        setU(rs)
    })
    let followdata = useSelector(state => state.follow.follower)
    const inputChange = e => {
        setSearchUser(e)
        //     const url = new RegExp(`${e}/*`);
        //     const result = user_api.get(`/data?user_name=${e}`).then(res =>
        //         setData(res.data))
        // followdata = followdata.filter(data=> data.user_name === searchUser)
    }
    const followAction = () => {
        if (typeof followUnfollow === 'undefined') followUnfollow = false
        dispatch(
            Follow.action({
                type: 'FOLLOW_ACTION',
                data: followUnfollow,
                follower: user_name,
                user: data[0].user_name,
            }),
        )
    }
    const search = () => {
        user_api.get(`/data`, { params: { user_name: searchUser } }).then(res => {
            setData(res.data)
            if (typeof res.data[0]?.id === 'undefined') alert('user not found')
        })
        followdata = followdata.filter(data => data.user_name === searchUser)
        setFU(followdata[0]?.followers?.includes(user_name))
        setSearchUser('')
    }

    return (
        <>
            <TextInput
                placeholder="enter user name"
                onChangeText={inputChange}
                value={searchUser}
                style={{
                    color: 'black',
                    borderBottomColor: 'black',
                    marginBottom: 10,
                    borderBottomWidth: 1,
                    width: '60%',
                }}
            />
            <Button title="search" onPress={search} />
            {data.map(data => (
                <View style={style.explore}>
                    <View style={style.people}>
                        <View style={style.people__list}>
                            <View style={style.people__person}>
                                <View style={style.people__column}>
                                    <View style={style.people__avatar_container}>
                                        <Image
                                            source={{ uri: data.DP }}
                                            style={style.people__avatar}
                                        />
                                    </View>
                                    <View style={style.people__info}>
                                        <View>
                                            <Text style={style.people__username}>
                                                {data.user_name}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={style.people__full_name}>{data.email}</Text>
                                        </View>
                                        <Button
                                            style={style.people__column_button}
                                            title={followUnfollow === true ? 'unfollow' : 'follow'}
                                            onPress={followAction}
                                        />
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

export default SearchUser
