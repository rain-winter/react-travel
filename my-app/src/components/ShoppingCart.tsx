import React from 'react'
// 继承React.Component
import styles from '../components/ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { appContext } from '../AppState'
// 数据传递
interface Props {}

// 组件自己的状态
interface State {
  isOpen: boolean
}
class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    // 给handleClick绑定this
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (e) => {
    // 普通函数的this指向了handleClick函数
    // console.log(e.target);
    // console.log(e.currentTarget);
    // if ((e.target as HTMLElement).nodeName === "SPAN") {
    //   this.setState({ isOpen: !this.state.isOpen });
    // }
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <appContext.Consumer>
        {(value) => {
          return (
            <div className={styles.cardContainer}>
              <button onClick={this.handleClick} className={styles.button}>
                <FiShoppingCart /> 购物车 {value.shoppingCart.items.length} (件)
                {console.log(value.shoppingCart.items.length)}
              </button>
              <div
                className={styles.cartDropDown}
                style={{
                  display: this.state.isOpen ? 'block' : 'none',
                }}
              >
                <ul>
                  {value.shoppingCart.items.map((i) => (
                    <li>{i.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        }}
      </appContext.Consumer>
    )
  }
}
export default ShoppingCart
