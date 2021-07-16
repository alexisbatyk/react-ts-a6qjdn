import React from 'react';
import User from './User';
import { ListProps } from "../service/types"
import styles from "./list.module.css";

const List: React.FunctionComponent<ListProps> = ({ userList, userBeingEdited, setUserBeingEdited, updateUserData }) => <div className={styles.container}>{userList.map(user => <User user={user} userBeingEdited={userBeingEdited} setUserBeingEdited={setUserBeingEdited} updateUserData={updateUserData} key={`${user.name.first}${user.name.last}`} />)}</div>;

export default List;
