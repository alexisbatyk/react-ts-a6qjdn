import React, { useEffect, useState } from "react"
import UsersApi from "../service/users";
import App from "../component/App"
import { UserData } from "../service/types"
import { DEFAULT_USER_DATA } from "../service/constants";


const AppContainer: React.FunctionComponent = () => {
  const [userList, setUserList] = useState<UserData[]>([]);
  const [userBeingEdited, setUserBeingEdited] = useState<UserData>(DEFAULT_USER_DATA)

  const updateUserData = (user: UserData) => {
    console.log(user)
    const isSameUser = (u: UserData) => u?.login?.uuid === user?.login?.uuid;

    const updatedUserList = userList.map((u) => {
      if(!isSameUser(u)) {
        return u;
      }
      else {
        return user;
      }
    })

    
    
    console.log(userList)
    setUserList(updatedUserList)
    setUserBeingEdited({} as UserData)
  }




  const loadData = async () => {
    const resp = await UsersApi.getUsers().then(res => res.json());
    // TODO: create fail situations
    console.log(resp);
    setUserList(resp.results)
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <App userList={userList} userBeingEdited={userBeingEdited} setUserBeingEdited={setUserBeingEdited} updateUserData={updateUserData} />
  );
}

export default AppContainer;