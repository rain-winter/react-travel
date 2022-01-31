import React, { useContext } from 'react'
import styles from './Robot.module.css'

import { appContext, appSetStateContext } from '../AppState'
import { withAddToCart } from './AddToCart'
export interface RobotProps {
  id: number
  name: string
  email: string
  addToCart: (id, name) => void
}

/**
 * React.FunctionComponent FC是缩写。会自动加载props对象。后面<>写的是泛型，会自动绑定到props参数上。
 * @param props
 * @returns
 */
const Robot: React.FC<RobotProps> = ({ id, name, email, addToCart }) => {
  const value = useContext(appContext)

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  )
}
export default withAddToCart(Robot)
