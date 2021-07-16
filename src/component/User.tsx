import React from "react"
import { UserProps } from "../service/types";
import styles from "./user.module.css"
import { FaUserEdit, FaCheck } from "react-icons/fa"

const User: React.FunctionComponent<UserProps> = ({ user, userBeingEdited, setUserBeingEdited, updateUserData }) => {
  const isBeingEditedThisUser = userBeingEdited?.login?.uuid === user?.login?.uuid;
  
  const getLastValues = () => {
    const editableData = document?.querySelectorAll(
      "p[contenteditable='true']"
    )
    
    const [first, last] = editableData[0].innerHTML.split(" ")
    const email = editableData[1].innerHTML
    const cell = editableData[2].innerHTML
    const [state, country] = editableData[3].innerHTML.split(", ")

    return {
      name: { first, last },
      email,
      cell,
      location: { state, country }
    }
  }

  return <div className={styles.container}>
    <div className={styles.upperDivision}>
      {isBeingEditedThisUser ? <FaCheck onClick={() => {
        // console.log(getLastValues()) 
        updateUserData({...user, ...getLastValues()})
      }} color={"white"} size={25} className={styles.icon} /> : <FaUserEdit onClick={() => setUserBeingEdited(user)} color={"white"} size={25} className={styles.icon} />}
      <p className={styles.name} contentEditable={isBeingEditedThisUser}>{user.name.first} {user.name.last}</p>
      <img className={styles.picture} src={user.picture.medium} />
    </div>
    <div className={styles.userInfo}>
      <p contentEditable={isBeingEditedThisUser}>{user.email}</p>
      <p contentEditable={isBeingEditedThisUser}>{user.cell}</p>
      <p contentEditable={isBeingEditedThisUser}>{user.location.state}, {user.location.country}</p>
    </div>
  </div>
}

export default User;