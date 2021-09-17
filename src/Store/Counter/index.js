import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import  ChangeCounter  from '@/Store/Counter/ChangeCounter';

export default buildSlice('counter', [ChangeCounter], {
    ChangeCounter: null,
  }).reducer
  
