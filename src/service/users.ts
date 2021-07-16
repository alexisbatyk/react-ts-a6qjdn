import { api } from '../config';

const getUsers = (): Promise<Response> => {
  return fetch(`${api}/?results=6`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

const UsersApi = {
  getUsers
}

export default UsersApi;
