import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { useRef } from 'react'
import { IndiactorWrapper } from './style'

const Indiartor = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    // 获取滚动距离
    const selectItemEl = contentRef.current.children[selectIndex]
    let distance = selectItemEl.offsetLeft + selectItemEl.clientWidth * 0.5 - contentRef.current.clientWidth * 0.5
    
    // 特殊情况处理
    if (distance < 0) distance = 0
    const totalDistance = contentRef.current.scrollWidth - contentRef.current.clientWidth
    if (distance > totalDistance) distance = totalDistance

    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndiactorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndiactorWrapper>
  )
})

Indiartor.propTypes = {
  selectIndex: PropTypes.number
}

export default Indiartor