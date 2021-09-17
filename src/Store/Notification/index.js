import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import  Notification  from '@/Store/Notification/Notification';


export default buildSlice('notification', [Notification], {
    Notification: null,
  }).reducer
  
