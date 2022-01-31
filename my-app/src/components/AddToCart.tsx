import React, { useContext } from 'react'
import { appSetStateContext } from '../AppState'
/**
 *  高阶组件HOC以 with开头
 *  返回一个组件
 *  改造了 Robot.tsx
 */
import { RobotProps } from './Robot'
export const withAddToCart = (
  ChildComponent: React.ComponentType<RobotProps>
) => {
  // return class extends React.Component {}
  // return ()=>{}
  return (props) => {
    const setState = useContext(appSetStateContext)
    const addToCart = (id, name) => {
      if (setState) {
        setState((state) => {
          console.log(state)
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          }
        })
      }
    }
    return <ChildComponent {...props} addToCart={addToCart} />
  }
}

/**
 *  自定义Hook
 */
export const useAddToCart = () => {
  const setState = useContext(appSetStateContext)
  const addToCart = (id, name) => {
    if (setState) {
      setState((state) => {
        console.log(state)
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        }
      })
    }
  }
  return addToCart
}
