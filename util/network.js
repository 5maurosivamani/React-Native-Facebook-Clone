import axios from 'axios';

const BACKEND_URL = 'https://facebook-clone-659d6-default-rtdb.firebaseio.com';

export const addNewFriend = data => {
  axios
    .post(`${BACKEND_URL}/friendslist.json`, data)
    .then(() => {
      console.log('Successfully Inserted!');
    })
    .catch(err => {
      console.log(err);
    });
};

export const fetchAllFriends = async () => {
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

  return friends;
};
