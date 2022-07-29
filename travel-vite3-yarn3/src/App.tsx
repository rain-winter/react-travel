import { Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import { HomePage, SignInPage, SearchPage, RegisterPage, DetailPage, NotFoundPage } from './pages'

function App(props) {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path={'/signIn'} element={<SignInPage />} />
        <Route path="/detail/:touristRouteId" element={<DetailPage />} />
        <Route path="/search/:keywords" element={<SearchPage />} />
        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
