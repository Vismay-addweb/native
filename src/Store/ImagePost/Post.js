
import { createAction } from '@reduxjs/toolkit'

const init = {
    data:[
        {
            id:'0',
            user_name:'vishal',
            email:'vishal.c.addweb@gmail.com',
            password:'vimshal',
            DP:'https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg',
            posts:[{
                id:'1245',
                post:'https://www.japantrendshop.com/img/bandai/proplica-kyojuro-rengoku-replica-demon-slayer-sword-1.jpg',
                comments:[{
                    id:'9',
                    user_name:'vismay',
                    comment:'!!!',
                    reply:[{
                        id:'34',
                        user_name:'prakash',
                        reply:'thanks'
                    },
                    {
                        id:'34t',
                        user_name:'vismay',
                        reply:"no problem",
                    },
                    {
                        id:'5464',
                        user_name:'hardik rana',
                        reply:'/....?????',
                    }
                ]

                },{
                    id:'3',
                    user_name:"hardik rana",
                    comment:'fly high!',
                    reply:[{
                        id:'346',
                        user_name:'bhavik',
                        reply:'burnout'
                    }]
                }]
            }]
        },
        {
            id:'1',
            user_name:'vismay',
            email:"vismay.addweb@gmail.com",
            password:'vismay99',
            DP:'https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg',
            posts:[{
                id:'wef',
                post:'https://cdn57.androidauthority.net/wp-content/uploads/2020/12/ldplayer-banner-for-android-authority.png',
                comments:[{
                    id:'wef',
                    user_name:'prakash',
                    comemnt:'lmao',
                    reply:[]
                }]
            }]
        }
    ]
}


export default {
  initialState: init,
  action: createAction('imagepost/post'),
  reducers(state, { payload }) {
        if(payload.type==='ADD_DATA')
        {
            state.data = (payload.data)
        }

        if(payload.type==='ADD_COMMENT')
        {
            var uid = payload.data.user_id
            var pid = payload.data.post_id
            var full = state

            for (var i=0;i<full.data.length;i++)
            {
                if(full.data[i].id === uid)
                {
                    for(var j=0;j<full.data[i].posts.length;j++)
                    {
                        if(full.data[i].posts[j].id === pid)
                            full.data[i].posts[j].comments.push(payload.comment_data)
                    }
                }
            }
            // full.data[i].posts[j].comments.push(payload.comment_data)
            // return state
            
                state.data=full.data

            
        }
        if(payload.type === 'ADD_POST')
        {
            var dummy = state
            for(var i=0; i<dummy.data.length; i++){
                if(dummy.data[i].user_name === payload.user_name)
                    dummy.data[i].posts.push(payload.data)
            }
            state.data = dummy.data
        }
        if(payload.type==='ADD_REPLY'){
            var cid = payload.data.comment_id
            var uid = payload.data.user_id
            var pid = payload.data.post_id
            // alert('cid'+cid+'pid'+pid+'uid'+uid)
            var full = state
            for (var i=0;i<full.data.length;i++)
            {
                if(full.data[i].id === uid)
                {
                    for(var j=0;j<full.data[i].posts.length;j++)
                    {
                        if(full.data[i].posts[j].id === pid)
                        {
                            for(var k=0;k<full.data[i].posts[j].comments.length;k++)
                            {
                                if(full.data[i].posts[j].comments[k].id === cid)
                                full.data[i].posts[j].comments[k].reply.push(payload.reply_data)
                            }
                        }
                    }
                }
            }
            //full.data[i].posts[j].comments[k].reply.push(payload.reply_data)
            state.data=full.data

            // return{
            //     ...state,
            //     data:full.data
            // }
        }
        if(payload.type==='DEL_COMMENT'){
            var uid = payload.data.user_id
            var pid = payload.data.post_id
            var cid = payload.data.data_id
            var full = state
          //  full.data[i].posts[j].comments = full.data[i].posts[j].comments.filter(data => data.id !== k)
          for (var i=0;i<full.data.length;i++)
          {
              if(full.data[i].id === uid)
              {
                  for(var j=0;j<full.data[i].posts.length;j++)
                  {
                      if(full.data[i].posts[j].id === pid)
                        full.data[i].posts[j].comments = full.data[i].posts[j].comments.filter(data => data.id !== cid)

                          //full.data[i].posts[j].comments.push(payload.comment_data)
                  }
              }
          }
                state.data=full.data
            
        }
        if(payload.type==='DEL_REPLY'){
            var uid = payload.data.user_id
            var pid = payload.data.post_id
            var cid = payload.data.comment_id
            var id = payload.data.id
            var full = state
            // dum.data[i].posts[j].comments[k].reply = dum.data[i].posts[j].comments[k].reply.filter(data => data.id !== id)
            for (var i=0;i<full.data.length;i++)
            {
                if(full.data[i].id === uid)
                {
                    for(var j=0;j<full.data[i].posts.length;j++)
                    {
                        if(full.data[i].posts[j].id === pid)
                        {
                            for(var k=0;k<full.data[i].posts[j].comments.length;k++)
                            {
                                if(full.data[i].posts[j].comments[k].id === cid)
                                full.data[i].posts[j].comments[k].reply = full.data[i].posts[j].comments[k].reply.filter(data => data.id !== id)
                            }
                        }
                    }
                }
            }
                state.data=full.data
            
        }
        if(payload.type==='DEL_POST'){
            var uid = payload.user_id
            var id = payload.post_id
            var dum = state
            for(var i=0;i<dum.data.length;i++)
            {
                if(dum.data[i].id === uid)
                dum.data[i].posts = dum.data[i].posts.filter(data => data.id !== id)
            }
            state.data = dum.data
        }
        else
            return state
  },
}
