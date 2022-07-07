import {Route, Routes} from "react-router-dom";
import styles from  './App.module.css'
import {HomePage} from './pages'

function App() {

  return (
    <div className={styles.App}>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </div>
  )

}

export default App
