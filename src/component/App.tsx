import React from "react"
import List from "./List";
import { AppProps, UserData } from "../service/types"
import styles from "./App.module.css"


const App: React.FunctionComponent<AppProps> = (props) => <div className={styles.container}>
  <List {...props} />
  <p>Start editing to see some magic happen :)</p>
</div>

export default App;