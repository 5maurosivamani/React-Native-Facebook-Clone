import {ADD_NEW_FRIEND,FETCH_ALL_FRIENDS} from './ActionTypeName';
import { addNewFriend } from '../../util/network';
import axios from 'axios';

const initialState = [];

function FriendsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_FRIEND:
      return addNewFriend(action.payload);
    case FETCH_ALL_FRIENDS:
        async function getAllFriends () {
            const response = await axios.get(`${BACKEND_URL}/friendslist.json`);

            const friends = [];
          
            for (const key in response.data) {
              const friendsObj = {
                id: key,
                name: response.data[key].name,
                age: response.data[key].age,
              };
          
              friends.push(friendsObj);
            }
          
            return [...state, friends];
        } 
        const newState = getAllFriends()

        console.log({newState});

        return newState
        
    
    default:
      return state;
  }
}

export default FriendsReducer;
