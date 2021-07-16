import { Dispatch, SetStateAction } from "react";

export interface UserData {
  name: { first: string, last: string },
  email: string,
  location: { country: string, state: string },
  picture: { medium: string }
  id: { value: string },
  cell: string,
  login: { uuid: string }
}

export interface AppProps {
  userList: UserData[],
  userBeingEdited: UserData,
  setUserBeingEdited: Dispatch<SetStateAction<UserData>>
  updateUserData: (user: UserData) => void
}

export interface ListProps {
  userList: UserData[],
  userBeingEdited: UserData,
  setUserBeingEdited: Dispatch<SetStateAction<UserData>>
  updateUserData: (user: UserData) => void
}

export interface UserProps {
  user: UserData,
  userBeingEdited: UserData,
  setUserBeingEdited: Dispatch<SetStateAction<UserData>>
  updateUserData: (user: UserData) => void
}

