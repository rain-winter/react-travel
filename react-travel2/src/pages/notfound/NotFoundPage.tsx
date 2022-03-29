import React from "react";

import notFoundImg from '../../assets/images/404.png'
import styles from './NotFound.module.css'

export class NotFoundPage extends React.Component {
  render() {
    return <div className={styles['not-found-container']}>
      <img src={notFoundImg} className={styles['not-found-img']} alt="" />
    </div>
  }
}