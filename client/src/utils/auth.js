import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // CHECKS TO SEE IF THERE IS A STORED TOKEN AND IF IT REMAINS VALID
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {

    // RETURNS USER TOKEN FROM LOCALSTORAGE
    return localStorage.getItem('id_token');
  }

  login(idToken) {

    // SAVES USER TOKEN TO LOCALSTORAGE
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {

    // CLEARS TOKEN STORED
    localStorage.removeItem('id_token');


    // RELOADS PAGE AFTER EVERY NEW TOKEN STATE CHANGE
    window.location.assign('/');

  }
}

export default new AuthService();
