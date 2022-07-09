import {Route, Routes} from "react-router-dom";
import styles from './App.module.css'
import {HomePage, SignInPage, RegisterPage, DetailPage, NotFoundPage} from './pages'

function App() {

    return (
        <div className={styles.App}>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='register' element={<RegisterPage/>}/>
                <Route path={'/signIn'} element={<SignInPage/>}/>
                <Route path='/detail/:touristRouteId' element={<DetailPage />} />
                {/* 404 */}
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </div>
    )

}

export default App
