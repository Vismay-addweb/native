import { createAction } from '@reduxjs/toolkit'

const init = {
    data:[
        {
            user_name:'vismay',
            status:0,
            notification:'prakash commented on your post',
            poster:'prakash',
            post:'crying.jpg'
        },
        {
            user_name:'bhavik',
            status:1,
            notification:'prakash commented on your post',
            poster:'prakash',
            post:'movie-details02.jpg'
        }
    ]
}

export default {
    initialState: init,
    action: createAction('notification/notification'),
    reducers(state, { payload }) {

      if(payload.type === 'ADD_NOTIFICATION')
      {
        state.data = state.data.concat(payload.data)
        // alert(JSON.stringify(dummy.data))
        
      }
      if(payload.type === 'MARK_AS_READ')
      {
        var user_data = state
        user_data.data.filter(data => data.user_name === payload.user_name)

        for(var i=0; i<user_data.data.length; i++)
        {
          user_data.data[i].status=1
        }
        state.data = user_data.data
      }


    },
  }
  