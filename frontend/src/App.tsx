import styles from './app.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'

export function App() {
 

  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}''