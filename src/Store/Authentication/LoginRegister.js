import { createAction } from '@reduxjs/toolkit'

var users = [{
  id:'1',
  user_name:'hardik rana',
  password:'hardik',
},{
  id:'2',
  user_name:'vismay',
  password:'vismay99',
},{
  id:'3',
  user_name:'prakash',
  password:'27202'
},{
  id:'4',
  user_name:'bhavik',
  password:'bhavik'
},{
  id:'5',
  user_name:'vishal',
  password:'vishal'
}]

export default {
  initialState: {isLogin:false},
  action: createAction('login/loginlogut'),
  reducers(state, { payload }) {
    if (payload.type === 'LOGIN') {
      var found = users.filter((user)=> user.user_name === payload.data.user_name)
      if(found.length >0)
       {
         var pass_found = users.filter(user => user.password === payload.data.password)
         if(pass_found.length>0)
         state.isLogin = true
         else
         alert("Wrong password")
        // alert("fnouidn")

        }
        else alert("user not found")
        // alert(user)
      }
    if(payload.type === 'ALREADY_LOGGED')
      state.isLogin = true
    if (payload.type === 'LOGOUT') {
      state.isLogin = false
     // state.counter--
    }
    if (payload.type === 'REGISTER'){
      state.isLogin = false
      users.push(payload.data)
    }
  },
}
