import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Spin } from 'antd'

import { Header, Footer, FilterArea, ProductList } from '../../components'
import styles from './Search.module.css'
import { searchProduct } from '../../redux/productSearch/slice'
import { RootState } from '../../redux/store'

// interface MatchParams {
//   keyword: string
// }

export const SearchPage: React.FC = () => {
  // 从路由获取 搜索关键词
  const dispatch = useDispatch()
  const location = useLocation()
  const { keywords } = useParams()
  // console.log('keywords', keywords)
  const { loading, error, pagination, data } = useSelector(
    (state: RootState) => state.productSearch
  )
  let productList = data
  // console.log('loading==>>', loading)
  // console.log('pagination==>>', pagination)
  // console.log('productList==>>', productList)

  // 传递location表示盯住路由的变化
  // 路由变化开始相应
  useEffect(() => {
    dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }))
  }, [location])

  const onPageChange = (nextPage: number | string, pageSize: number | string) => {
    dispatch(searchProduct({ nextPage, pageSize, keywords }))
  }

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
        }}
      />
    )
  }

  if (error) {
    return <div>网站出错：{error}</div>
  }

  return (
    <>
      <Header />
      <div className={styles['page-content']}>
        {/* 分页过滤器 */}
        <div className={styles['product-list-container']}>
          <FilterArea />
        </div>
        {/* 产品列表 */}
        <div className={styles['product-list-container']}>
          <ProductList data={productList} paging={pagination} onPageChange={onPageChange} />
        </div>
      </div>
      <Footer />
    </>
  )
}
