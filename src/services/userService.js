import httpClient from 'httpClient';

class UserService {
  login(user) {
    return httpClient.post('/users/sign_in', user);
  }

  logout() {
    return httpClient.delete('/users/sign_out', { data: {} });
  }

  signUp(user) {
    console.log('test1234', user)
    return httpClient.post('/users', user);
  }
}

export default new UserService();
