import UserRepository from '../repository/UserRepository';

class UserService{

  // 프라이빗 멤버변수
  #userRepository = new UserRepository();

  SignUp(user){
    return this.#userRepository.save(user);
  }

  update(email, user){
    return this.#userRepository.update(email, user);
  }

  SignIn(email, password){
    const user = this.#userRepository.read(email);
    if(user.password === password){
      alert('로그인 성공');
      return user;
    }else{
      alert('로그인 실패');
      return null;
    }
  }
}

export default UserService;