import AuthService from './auth.service';

export const  AuthHeader = async (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }

    const user = AuthService.getCurrentUser();
    if(user){
      options.headers.set('Authorization', `Bearer ${user.token}`);
    }

    return fetch(url, options);
}