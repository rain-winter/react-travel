import React, { useState } from 'react'

/**
 * 放购物车的数据
 */
interface AppStateValue {
  username: string
  shoppingCart: { items: { id: number; name: string }[] }
}

const defaultContextValue: AppStateValue = {
  username: 'rain',
  shoppingCart: { items: [] },
}

export const appContext = React.createContext(defaultContextValue)

// 1创建另一个context，用于共享setState()需要指定泛型，不然会报错
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined)

export const AppStateProvider: React.FC = (props) => {
  console.log(props)
  const [state, setState] = useState(defaultContextValue)
  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  )
}
