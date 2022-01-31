import React, { useContext } from 'react'
import styles from './Robot.module.css'

import { appContext, appSetStateContext } from '../AppState'
import { useAddToCart } from './AddToCart'

/**
 * 自定义Hook】useAddToCart()
 */

interface RobotProps {
  id: number
  name: string
  email: string
}

/**
 * React.FunctionComponent FC是缩写。会自动加载props对象。后面<>写的是泛型，会自动绑定到props参数上。
 * @param props
 * @returns
 */
const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext)
  const addToCart = useAddToCart()
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  )
}
export default RobotDiscount
