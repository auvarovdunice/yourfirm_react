import { actionTypes }  from './reducer';
import {GET_AWARDS, SET_AWARDS} from './constants'

 const actions = {
     getAwards: () => {
         return {
             type: GET_AWARDS,
         };
     },
     setAwards: (awards) => {
         return {
             type: SET_AWARDS,
             payload: awards
         };
     },
 };


export default actions;