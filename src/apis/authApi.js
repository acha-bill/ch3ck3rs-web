import {getApi} from './axios';

const subUrl = '/auth';


class AuthApi {
  constructor(){
    this.api = getApi();
  }
  setApi(api){
    this.api = api;
  }
  async login(userName, password){
    try{
      const res = await this.api.post(`${subUrl}/login`,{userName, password});
      return res.data;
    }catch(e){
      throw e.response.data;
    }
  }

  async register(user){
    try{
      const res = await this.api.post(`${subUrl}/register`, user);
      return res.data;
    }catch(e){
      throw e.response.data;
    }
  }
}
var authApi = new AuthApi();
export default authApi;