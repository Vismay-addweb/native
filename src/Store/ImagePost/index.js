import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import  Post  from '@/Store/ImagePost/Post';

export default buildSlice('imagepost', [Post], {
    Post: null,
  }).reducer
  
