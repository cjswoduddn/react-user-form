import axios from 'axios';

const USER_BASE_URL = 'http://localhost:8080/members';

class UserRepository{

  save(user){
    return axios.post(USER_BASE_URL+"/new", user);
  }

  update(userEmail, user){
    return axios.post(USER_BASE_URL+"/update", userEmail, user);
  }

  read(userEmail){
    return axios.post(USER_BASE_URL, userEmail);
  }

}

export default UserRepository; 