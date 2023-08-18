import axios from 'axios';
import Api from "../config/Api";

export const usersService = {
    getUsersData,
    getUsersAvatar
};

async function getUsersData(params) {
    return await axios.get(Api.USERS_DATA, params, {});
  }

  async function getUsersAvatar(params){
    return await axios.get(Api.USERS_AVATAR, params, {});
  }