import {getApi} from './axios';

const subUrl = '/users';


class UsersApi {
  constructor(){
    this.api = getApi();
  }
  setApi(api){
    this.api = api;
  }
  async profile(){
    try{
      const res = await this.api.get(`${subUrl}/me/profile`);
      return res.data;
    }catch(e){
      throw e.response.data;
    }
  }

}
var usersApi = new UsersApi();
export default usersApi;