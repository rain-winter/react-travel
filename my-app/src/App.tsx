import React, { useState, useEffect } from 'react'
import logo from './assets/images/logo.svg'
// import robots from "./mockdata/robots.json";
import Robot from './components/Robot'
import RobotDiscount from './components/RobotDiscount'
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart'

interface Props {
  username: string
}
interface State {
  robotGallery: any[]
  count: number
}

const App: React.FC = (props) => {
  // number function
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    document.title = `点击${count}`
  }, [count])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          'http://jsonplaceholder.typicode.com/users'
        )
        // .then((res) => res.json())
        // .then((data) => setRobotGallery(data))
        const data = await response.json()
        setRobotGallery(data)
      } catch (e: any) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click
      </button>
      <h4>count:{count}</h4>

      {/* 购物车 */}
      <ShoppingCart />

      {/* 错误处理 */}
      {(!error || error !== '') && <div>{error}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r, index) =>
            index % 2 === 0 ? (
              <RobotDiscount id={r.id} email={r.email} name={r.name} />
            ) : (
              <Robot id={r.id} email={r.email} name={r.name} />
            )
          )}
        </div>
      ) : (
        <h2>loading...加载中</h2>
      )}
    </div>
  )
}

export default App
