import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';

import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import { useRef } from 'react';
import Indiartor from '@/base-ui/indiactor';
import { useState } from 'react';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props
  const [ selectIndex, setSelectIndex ] = useState(0)
  const sliderRef = useRef()

  // 事件处理函数
  function contorlClickHandel(e, isRight = true) {
    e.stopPropagation()
    isRight ? sliderRef.current.next(): sliderRef.current.prev()

    // 获取最新的索引
    let newIndex = isRight ? selectIndex + 1: selectIndex - 1
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex >= itemData.picture_urls.length) newIndex = 0
    setSelectIndex(newIndex)
  }
  
  function itemClickHandel() {
    if (itemClick) itemClick(itemData)
  }

  // 子元素赋值
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const sliderElement = (
    <div className="swiper">
      <div className="contorl">
        <div className="btn left" onClick={e => contorlClickHandel(e, false)}>
          <IconArrowLeft width="30" height="30"/>
        </div>
        <div className="btn right" onClick={e => contorlClickHandel(e)}>
          <IconArrowRight width="30" height="30"/>
        </div>
      </div>
      <div className="indiactor">
        <Indiartor selectIndex={selectIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div key={item} className='dot-item'>
                  <span className={classNames('dot', {active: index === selectIndex})}></span>
                </div>
              )
            })
          }
        </Indiartor>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )

  return (
    <ItemWrapper 
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick = {itemClickHandel}
    >
      <div className='inner'>
        {itemData.picture_urls ? sliderElement: pictureElement}
        
        <div className="desc">
          {itemData.verify_info.messages.join("·")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="score">
          <Rating 
            precision={0.1} 
            value={itemData.star_rating ?? 4.7} 
            readOnly 
            sx={{fontSize: "12px", color: "#00848A"}} 
          />
          <span className='count'>{itemData.reviews_count}</span>
          <span className='extra'>{itemData?.bottom_info?.content}</span>
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem