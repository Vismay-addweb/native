import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import  LoginRegister  from '@/Store/Authentication/LoginRegister';

export default buildSlice('login', [LoginRegister], {
    LoginRegister: null,
  }).reducer
  
