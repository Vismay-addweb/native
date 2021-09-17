import { createAction } from '@reduxjs/toolkit'


export default {
  initialState: {counter:0},
  action: createAction('counter/changecounter'),
  reducers(state, { payload }) {
    if (payload.counter === 'INCREMENT') {
      state.counter+=1     
    }
    if (payload.counter === 'DECREMENT') {
      state.counter--
    }
  },
}
