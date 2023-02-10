import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classNames from "classnames"

import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import { BorwserWrapper } from './style'
import Indiartor from '../indiactor'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const PictureBorwser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const [ isNext, setIsNext ] = useState(true)
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // 事件监听函数
  function closeBtnClickHandel() {
    if (closeClick) {
      closeClick()
    }
  }
  function contorlClickHandel(isRight = true) {
    let newIndex = isRight ? currentIndex + 1: currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isRight)
  }
  function bottomItemClickHandel(index) {
    index < currentIndex ? setIsNext(false): setIsNext(true)
    setCurrentIndex(index)
  }
  
  return (
    <BorwserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandel}>
          <IconClose/>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => contorlClickHandel(false)}>
            <IconArrowLeft width="77" height="77"/>
          </div>
          <div className="btn right" onClick={e => contorlClickHandel()}>
            <IconArrowRight width="77" height="77"/>
          </div>
        </div>
        <div className="pictures">
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="indiactor">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}: </span>
              <span>room Apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e => setShowList(!showList)}>
              <span>{showList ? "隐藏": "显示"}照片列表</span>
              {showList ? <IconTriangleArrowBottom/>: <IconTriangleArrowTop/>}
            </div>
          </div>
          <div className="list">
            <Indiartor selectIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div 
                      className={classNames('item', {active: currentIndex === index})}
                      key={item} 
                      onClick={e => bottomItemClickHandel(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indiartor>
          </div>
        </div>
      </div>
    </BorwserWrapper>
  )
})

PictureBorwser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBorwser