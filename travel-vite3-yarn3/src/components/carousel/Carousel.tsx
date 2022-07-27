import React from "react";

// 此处我们也使用了 Carousel 这个名字，所以我们重新给他命名
import { Image, Carousel as AntdCarousel } from 'antd';

// 引入三张轮播图
import carouselImage1 from "../../assets/images/carousel_1.jpg";
import carouselImage2 from "../../assets/images/carousel_2.jpg";
import carouselImage3 from "../../assets/images/carousel_3.jpg";

import styles from './Carousel.module.css'

export const Carousel: React.FC = () => {
  return (
    <AntdCarousel autoplay className={styles['silder']}>
      <Image preview={false} src={carouselImage1} alt="tr" />
      <Image preview={false} src={carouselImage2} alt="" />
      <Image preview={false} src={carouselImage3} alt="" />
    </AntdCarousel>
  )
}