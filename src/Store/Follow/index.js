import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import  Follow  from '@/Store/Follow/Follow';


export default buildSlice('follow', [Follow], {
    Follow: null,
  }).reducer
  
