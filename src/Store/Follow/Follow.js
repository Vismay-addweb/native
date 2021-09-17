import { createAction } from '@reduxjs/toolkit'
const init = {
	follower: [
		{
			user_name: 'vismay',
			followers: ['hardik rana'],
		},
		{
			user_name: 'prakash',
			followers: ['hardik rana'],
		},
	],
	following: [
		{
			user_name: 'hardik rana',
			following: ['vismay', 'prakash'],
		},
	],
}

export default {
	initialState: init,
	action: createAction('notification/notification'),
	reducers(state, { payload }) {
		if (payload.type === 'FOLLOW_ACTION') {
			alert(JSON.stringify(payload))
			var full = state
			if (payload.data === false) {
				var flag = false
				for (var i = 0; i < full.follower.length; i++) {
					if (full.follower[i].user_name === payload.user) {
						full.follower[i].followers.push(payload.follower)
						flag = true
					}
				}
				const data = {
					user_name: payload.user,
					followers: [payload.follower],
				}
				if (flag === false) full.follower.push(data)

				//full.follower[i].followers = full.follower[i].followers.filter(followers => followers.includes(payload.user_name) )
	
				for (var i = 0; i < full.following.length; i++) {
					var flag2=false
					if (full.following[i].user_name === payload.follower) {
						flag2=true
							full.following[i].following.push(payload.user)
							alert(JSON.stringify(full.following))
					
					}
				}
				const data2={
					user_name:payload.follower,
					following:[payload.user]
				}
				if(flag2===false) full.following.push(data2)
				alert(JSON.stringify(full))
			}
			else
			{

				for(var i=0;i< full.follower.length;i++)
				{
					if (full.follower[i].user_name === payload.user) {
						full.follower[i].followers = full.follower[i].followers.filter(follower=> !follower.includes(payload.follower))
					}	
				}

				for (var i = 0; i < full.following.length; i++) {
					if (full.following[i].user_name === payload.follower) {
						
							full.following[i].following = full.following[i].following.filter(
								following => !following.includes(payload.user),
							)
						
					}
				}
			}
			// alert(JSON.stringify(full))
			state.following = full.following
			state.follower = full.follower
		}
		if (payload.type === 'GET_FOLLOWERS') {
			// alert("payload     "+JSON.stringify(payload))
			state.follower = state.follower.filter(
				data => data.user_name === payload.user_name,
			)
			// alert(JSON.stringify(state.data))
		}
		if (payload.type === 'GET_FOLLOWING') {
			state.following = state.following.filter(
				data => data.user_name === payload.user_name,
			)
		}
	},
}
